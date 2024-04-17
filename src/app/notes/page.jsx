import React from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import styles from "./notes.module.css";
import Link from "next/link";
import { DotsVerticalIcon } from "@radix-ui/react-icons";

const Notes = () => {
  return (
    <>
      <div className="notes" id="notes">
        <div className="searchbar flex justify-center items-center mt-10">
          <div className="flex w-full md:max-w-lg sm:max-w-md max-w-sm mx-2 sm:mx-0 items-center border rounded-full h-[3rem]">
            <Input
              type="text"
              placeholder="Search for notes..."
              className="border-none focus-visible:ring-0 p-5 "
            />
            <Button type="submit" className="text-md h-[100%] px-8 ">
              Search
            </Button>
          </div>
        </div>

        <div className={styles.notesContainer}>
          <Card className={styles.note}>
            <CardHeader className="flex justify-between items-center">
              <CardTitle className="text-xl">Note</CardTitle>
              <div className="flex gap-1 justify-end items-center">
                <Switch />
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button
                      variant={"ghost"}
                      className="h-9 w-9 flex gap-2 justify-center items-center rounded-full p-2"
                    >
                      <DotsVerticalIcon
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="rounded">
                    <DropdownMenuItem className="rounded">
                      <Link href={"/editNote"}>Edit</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded">
                      <Link href={"/editNote"}>Add label</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="rounded">
                      <Link href={"/"}>Delete</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi reiciendis temporibus similique in odit id sunt labore
                ex, voluptatibus quos magnam tempore, nisi eum accusamus
                molestias sint! Minima, quo perspiciatis?
              </p>
            </CardContent>
            <CardFooter className="flex gap-2 justify-start items-start">
              <div className="labels w-full flex gap-2 flex-wrap">
                <Card className="px-3 py-1 rounded-full w-max ">lebel</Card>
                <Card className="px-3 py-1 rounded-full w-max ">
                  hello world
                </Card>
                <Card className="px-3 py-1 rounded-full w-max ">category</Card>
              </div>
            </CardFooter>
          </Card>
          <Card className={styles.note}>
            <CardHeader className="flex justify-between items-center">
              <CardTitle className="text-xl">Note</CardTitle>
              <div className="flex gap-1 justify-end items-center">
                <Switch />
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button
                      variant={"ghost"}
                      className="h-9 w-9 flex gap-2 justify-center items-center rounded-full p-2"
                    >
                      <DotsVerticalIcon
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="rounded">
                    <DropdownMenuItem className="rounded">
                      <Link href={"/editNote"}>Edit</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded">
                      <Link href={"/editNote"}>Add label</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="rounded">
                      <Link href={"/"}>Delete</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi reiciendis temporibus similique in odit id sunt labore
                ex, voluptatibus quos magnam tempore, nisi eum accusamus
                molestias sint! Minima, quo perspiciatis? Lorem, ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </CardContent>
            <CardFooter className="flex gap-2 justify-start items-start">
              <div className="labels w-full flex gap-2 flex-wrap">
                <Card className="px-3 py-1 rounded-full w-max ">lebel</Card>
                <Card className="px-3 py-1 rounded-full w-max ">
                  hello world
                </Card>
                <Card className="px-3 py-1 rounded-full w-max ">category</Card>
              </div>
            </CardFooter>
          </Card>
          <Card className={styles.note}>
            <CardHeader className="flex justify-between items-center">
              <CardTitle className="text-xl">Note</CardTitle>
              <div className="flex gap-1 justify-end items-center">
                <Switch />
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button
                      variant={"ghost"}
                      className="h-9 w-9 flex gap-2 justify-center items-center rounded-full p-2"
                    >
                      <DotsVerticalIcon
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="rounded">
                    <DropdownMenuItem className="rounded">
                      <Link href={"/editNote"}>Edit</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded">
                      <Link href={"/editNote"}>Add label</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="rounded">
                      <Link href={"/"}>Delete</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi reiciendis temporibus
              </p>
            </CardContent>
            <CardFooter className="flex gap-2 justify-start items-start">
              <div className="labels w-full flex gap-2 flex-wrap">
                <Card className="px-3 py-1 rounded-full w-max ">lebel</Card>
                <Card className="px-3 py-1 rounded-full w-max ">
                  hello world
                </Card>
                <Card className="px-3 py-1 rounded-full w-max ">category</Card>
              </div>
            </CardFooter>
          </Card>
          <Card className={styles.note}>
            <CardHeader className="flex justify-between items-center">
              <CardTitle className="text-xl">Note</CardTitle>
              <div className="flex gap-1 justify-end items-center">
                <Switch />
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button
                      variant={"ghost"}
                      className="h-9 w-9 flex gap-2 justify-center items-center rounded-full p-2"
                    >
                      <DotsVerticalIcon
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="rounded">
                    <DropdownMenuItem className="rounded">
                      <Link href={"/editNote"}>Edit</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded">
                      <Link href={"/editNote"}>Add label</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="rounded">
                      <Link href={"/"}>Delete</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi reiciendis Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Commodi qui beatae ad quis, culpa non eum
                repellat labore autem, dolorum ipsa necessitatibus doloribus
                itaque cum veniam architecto magni quam sequi totam, harum ipsam
                consectetur! Suscipit cupiditate ex inventore quas iure harum
                perferendis illum debitis rem id aliquam,
              </p>
            </CardContent>
            <CardFooter className="flex gap-2 justify-start items-start">
              <div className="labels w-full flex gap-2 flex-wrap">
                <Card className="px-3 py-1 rounded-full w-max">lebel</Card>
                <Card className="px-3 py-1 rounded-full w-max">
                  hello world
                </Card>
                <Card className="px-3 py-1 rounded-full w-max">category</Card>
              </div>
            </CardFooter>
          </Card>
          <Card className={styles.note}>
            <CardHeader className="flex justify-between items-center">
              <CardTitle className="text-xl">Note</CardTitle>
              <div className="flex gap-1 justify-end items-center">
                <Switch />
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button
                      variant={"ghost"}
                      className="h-9 w-9 flex gap-2 justify-center items-center rounded-full p-2"
                    >
                      <DotsVerticalIcon
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="rounded">
                    <DropdownMenuItem className="rounded">
                      <Link href={"/editNote"}>Edit</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded">
                      <Link href={"/editNote"}>Add label</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="rounded">
                      <Link href={"/"}>Delete</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi reiciendis temporibus similique in odit id sunt labore
                ex, voluptatibus quos magnam tempore, nisi eum accusamus
                molestias sint! Minima, quo perspiciatis? Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Officia odio minima similique
                neque praesentium pariatur nihil.
              </p>
            </CardContent>
            <CardFooter className="flex gap-2 justify-start items-start">
              <div className="labels w-full flex gap-2 flex-wrap">
                <Card className="px-3 py-1 rounded-full w-max">lebel</Card>
                <Card className="px-3 py-1 rounded-full w-max">
                  hello world
                </Card>
                <Card className="px-3 py-1 rounded-full w-max">category</Card>
              </div>
            </CardFooter>
          </Card>
          <Card className={styles.note}>
            <CardHeader className="flex justify-between items-center">
              <CardTitle className="text-xl">Note</CardTitle>
              <div className="flex gap-1 justify-end items-center">
                <Switch />
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button
                      variant={"ghost"}
                      className="h-9 w-9 flex gap-2 justify-center items-center rounded-full p-2"
                    >
                      <DotsVerticalIcon
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="rounded">
                    <DropdownMenuItem className="rounded">
                      <Link href={"/editNote"}>Edit</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded">
                      <Link href={"/editNote"}>Add label</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="rounded">
                      <Link href={"/"}>Delete</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi reiciendis.
              </p>
            </CardContent>
            <CardFooter className="flex gap-2 justify-start items-start">
              <div className="labels w-full flex gap-2 flex-wrap">
                <Card className="px-3 py-1 rounded-full w-max">lebel</Card>
                <Card className="px-3 py-1 rounded-full w-max">
                  hello world
                </Card>
                <Card className="px-3 py-1 rounded-full w-max">category</Card>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Notes;
