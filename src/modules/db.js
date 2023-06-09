export async function getData() {
  // eslint-disable-next-line no-unused-vars
  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpxc2Jjc2NvZWZyd3p2amRvdmlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NDEwMDYwNSwiZXhwIjoxOTk5Njc2NjA1fQ.d0qpFDdFORgGH7EfIxRcmwGJrj54YfBsyaq7bDjxSkM";
  const url = "https://zqsbcscoefrwzvjdovik.supabase.co";
  const res = await fetch(url + "/rest/v1/vinyler", {
    method: "GET",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpxc2Jjc2NvZWZyd3p2amRvdmlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NDEwMDYwNSwiZXhwIjoxOTk5Njc2NjA1fQ.d0qpFDdFORgGH7EfIxRcmwGJrj54YfBsyaq7bDjxSkM",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpxc2Jjc2NvZWZyd3p2amRvdmlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQxMDA2MDUsImV4cCI6MTk5OTY3NjYwNX0.fKvEho2yb-t5P0mBx099EKocJ0lr8hh93vzVWrkkHeI",
      "Content-Type": "application/json",
    },
  });
  return await res.json();
}
