with import <nixpkgs> {};
mkShell {
  buildInputs = [
   nodePackages.pnpm # Fast, disk space efficient package manager
   nodePackages.serve # Static file serving and directory listing
   nodePackages.prettier # Prettier is an opinionated code formatter
   xsel # Command-line program for getting and setting the contents of the X selection
   html-tidy # A HTML validator and `tidier`
  ];
}
