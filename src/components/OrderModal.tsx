import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import api from "@/hooks/api";

// Interface ga productId qo'shing
interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: "gate" | "door" | "fence" | "railing" | "restoration";
  productId?: string; // ← qo'shildi
}

export const OrderModal = ({
  isOpen,
  onClose,
  defaultService,
  productId,
}: OrderModalProps): JSX.Element => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    serviceType: defaultService || "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await api.post("/order", {
        fullName: formData.fullName,
        phone: formData.phone,
        address: formData.address,
        email: "asd@gmail.com",
        oferta: true,
        totalPrice: 0,
        items: productId ? [{ productId, quantity: 1 }] : [],
      });

      setIsSuccess(true);
      toast.success(t("order.success"));

      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          fullName: "",
          phone: "",
          address: "",
          serviceType: "",
          message: "",
        });
        onClose();
      }, 2000);
    } catch (err) {
      toast.error("Xatolik yuz berdi, qayta urinib ko'ring");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 w-full max-w-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15, stiffness: 300 }}
                  className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4"
                >
                  <Check className="w-8 h-8 text-primary" />
                </motion.div>
                <p className="text-lg font-medium text-foreground">
                  {t("order.success")}
                </p>
              </motion.div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    {t("order.title")}
                  </h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="hover:bg-muted transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      {t("order.fullName")} *
                    </label>
                    <Input
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="bg-background focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      {t("order.phone")} *
                    </label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-background focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="+998 94 648 79 45"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      {t("order.address")} *
                    </label>
                    <Input
                      required
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="bg-background focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      {t("order.serviceType")} *
                    </label>
                    <Select
                      required
                      value={formData.serviceType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, serviceType: value })
                      }
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        <SelectItem value="gate">
                          {t("order.select.gate")}
                        </SelectItem>
                        <SelectItem value="door">
                          {t("order.select.door")}
                        </SelectItem>
                        <SelectItem value="fence">
                          {t("order.select.fence")}
                        </SelectItem>
                        <SelectItem value="railing">
                          {t("order.select.railing")}
                        </SelectItem>
                        <SelectItem value="restoration">
                          {t("order.select.restoration")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      {t("order.message")}
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-background resize-none focus:ring-2 focus:ring-primary/20 transition-all"
                      rows={3}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-forge hover:opacity-90 text-primary-foreground font-semibold transition-all hover:shadow-glow"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                        />
                      ) : (
                        t("order.submit")
                      )}
                    </Button>
                  </motion.div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
