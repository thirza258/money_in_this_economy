const Footer: React.FC = () => {
    return (
      <footer className="border-t-2 border-black text-center py-4">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} MoneyInThisEconomy. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  