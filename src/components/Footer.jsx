import React from "react";

const Footer = () => {
  const data = [
    {
      title: "About",
      links: [
        { label: "Features", link: "#" },
        { label: "Pricing", link: "#" },
        { label: "Support", link: "#" },
        { label: "Forums", link: "#" },
      ],
    },
    {
      title: "Project",
      links: [
        { label: "Contribute", link: "#" },
        { label: "Media assets", link: "#" },
        { label: "Changelog", link: "#" },
        { label: "Releases", link: "#" },
      ],
    },
    {
      title: "Community",
      links: [
        { label: "Join Discord", link: "#" },
        { label: "Follow on Twitter", link: "#" },
        { label: "Email newsletter", link: "#" },
        { label: "GitHub discussions", link: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((group) => (
            <div className="text-center" key={group.title}>
              <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
              <ul>
                {group.links.map((link, index) => (
                  <li key={index} className="mb-2">
                    <a href={link.link} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-8">
          <div>
            <img src="/path/to/logo.png" alt="Logo" className="h-8" />
            <p className="text-xs text-gray-400 mt-2">
              Build fully functional accessible web applications faster than
              ever
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-400">
              © 2020 mantine.dev. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.google.com/search?sca_esv=43eb03caa67a0f6e&sca_upv=1&sxsrf=ADLYWILaDB3pNG1JgXwppXIU1DOUlLrwfQ:1716276625650&q=cv+random&uds=ADvngMhgcn7A4vt13ND33y_eU2fX8Mgnq4v8WLDbHdUw6qhM_H10gfznvrIbmcc9gN0TTBc5UlkcEU4nrSKh_p7L92prFwviW3HKxnB-9khRG67QqN8h6afxFTnGnXChVoHwSxBqgKh45ywkVmJ9RpmKe0VCa9u-QVDvajF8ZHWnxZYMCIi9zuO_fi9e12Eew_VyJv8dh0cA4lRqfhDqRB40e9R9yiKORVxswgUtZp9paq9j82gJUNx2JB40uxP6ZauhdbYp8q7xt5CPQjIe7F7JM6cAEPBXGPhCcuuhC0wAEF3jDTaKH-U&udm=2&prmd=ivsnmbz&sa=X&ved=2ahUKEwjlnO7UnJ6GAxWlUWcHHcw-AqIQtKgLegQIEBAB&biw=1920&bih=997&dpr=1#vhid=O4vCH1jFe9zbjM&vssid=mosaic"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.google.com/search?sca_esv=43eb03caa67a0f6e&sca_upv=1&sxsrf=ADLYWILaDB3pNG1JgXwppXIU1DOUlLrwfQ:1716276625650&q=cv+random&uds=ADvngMhgcn7A4vt13ND33y_eU2fX8Mgnq4v8WLDbHdUw6qhM_H10gfznvrIbmcc9gN0TTBc5UlkcEU4nrSKh_p7L92prFwviW3HKxnB-9khRG67QqN8h6afxFTnGnXChVoHwSxBqgKh45ywkVmJ9RpmKe0VCa9u-QVDvajF8ZHWnxZYMCIi9zuO_fi9e12Eew_VyJv8dh0cA4lRqfhDqRB40e9R9yiKORVxswgUtZp9paq9j82gJUNx2JB40uxP6ZauhdbYp8q7xt5CPQjIe7F7JM6cAEPBXGPhCcuuhC0wAEF3jDTaKH-U&udm=2&prmd=ivsnmbz&sa=X&ved=2ahUKEwjlnO7UnJ6GAxWlUWcHHcw-AqIQtKgLegQIEBAB&biw=1920&bih=997&dpr=1#vhid=O4vCH1jFe9zbjM&vssid=mosaic"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.google.com/search?sca_esv=43eb03caa67a0f6e&sca_upv=1&sxsrf=ADLYWILaDB3pNG1JgXwppXIU1DOUlLrwfQ:1716276625650&q=cv+random&uds=ADvngMhgcn7A4vt13ND33y_eU2fX8Mgnq4v8WLDbHdUw6qhM_H10gfznvrIbmcc9gN0TTBc5UlkcEU4nrSKh_p7L92prFwviW3HKxnB-9khRG67QqN8h6afxFTnGnXChVoHwSxBqgKh45ywkVmJ9RpmKe0VCa9u-QVDvajF8ZHWnxZYMCIi9zuO_fi9e12Eew_VyJv8dh0cA4lRqfhDqRB40e9R9yiKORVxswgUtZp9paq9j82gJUNx2JB40uxP6ZauhdbYp8q7xt5CPQjIe7F7JM6cAEPBXGPhCcuuhC0wAEF3jDTaKH-U&udm=2&prmd=ivsnmbz&sa=X&ved=2ahUKEwjlnO7UnJ6GAxWlUWcHHcw-AqIQtKgLegQIEBAB&biw=1920&bih=997&dpr=1#vhid=O4vCH1jFe9zbjM&vssid=mosaic"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
