export default function EmptyState() {
  return (
    <div className="text-center text-muted-foreground py-8">
      <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
      <p className="text-lg mb-2">How can I help you today?</p>
      <p className="text-sm">Try asking about our services, pricing, or technology solutions</p>
    </div>
  );
}