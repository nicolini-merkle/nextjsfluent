'use client';
import * as React from "react";
import {useId} from "react";
import Image from "next/image";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import {
    Accordion,
    AccordionHeader,
    AccordionItem,
    AccordionPanel,
    Body1,
    Button,
    Caption1,
    Card,
    CardFooter,
    CardHeader,
    CardPreview,
    CompoundButton,
    Dialog,
    DialogActions,
    DialogBody,
    DialogContent,
    DialogSurface,
    DialogTitle,
    DialogTrigger,
    Field,
    InfoLabel,
    Label,
    Link,
    makeStyles,
    Menu,
    MenuItem,
    MenuList,
    MenuPopover,
    MenuTrigger,
    mergeClasses,
    Popover,
    PopoverSurface,
    PopoverTrigger,
    Rating,
    SearchBox,
    SpinButton,
    Spinner,
    SplitButton,
    Toast,
    ToastBody,
    Toaster,
    ToastFooter,
    ToastTitle,
    tokens,
    typographyStyles,
    useToastController,
} from '@fluentui/react-components';
import {ArrowReplyRegular, CalendarMonthRegular, CallEndRegular, ShareRegular} from "@fluentui/react-icons";

const useStyles = makeStyles({
    link: typographyStyles.title2,
    container: {
        flex: '1 1 auto',
        minWidth: '100%',
        padding: '1rem 2rem',
        boxSizing: 'border-box',
    },
    darkBackground: {
        backgroundColor: tokens.colorPaletteBlueBackground2,
    },
    roundButton: {
        borderRadius: tokens.borderRadiusCircular,
        backgroundColor: tokens.colorNeutralBackground1,
        color: tokens.colorNeutralForeground1,
        fontSize: tokens.fontSizeBase400,
        textShadow: tokens.shadow64
    },
    card: {
        margin: "auto",
        width: "720px",
        maxWidth: "100%",
    },
    control: {
        maxWidth: "300px",
    },
});

const resolveAsset = (asset: string) => {
    const ASSET_URL =
        "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

    return `${ASSET_URL}${asset}`;
};

export default function Home({LabelProps, CompoundButtonProps, MenuButtonProps, InfoLabelProps}) {
    const classes = useStyles();
    const mainContainerClasses = mergeClasses(classes.container, classes.darkBackground);
    const [target, setTarget] = React.useState<HTMLElement | null>(null);

    const toasterId = useId("toaster");
    const { dispatchToast } = useToastController(toasterId);
    const notify = () =>
        dispatchToast(
            <Toast>
                <ToastTitle action={<Link>Undo</Link>}>Email sent</ToastTitle>
                <ToastBody subtitle="Subtitle">This is a toast body</ToastBody>
                <ToastFooter>
                    <Link>Action</Link>
                    <Link>Action</Link>
                </ToastFooter>
            </Toast>,
            { intent: "success" }
        );

    return (
        <main className={mainContainerClasses}>

            <h3>Image</h3>
            <Image src="//www.mastercard.us/content/dam/public/mastercardcom/na/us/en/homepage/Home/mc-logo-52.svg"
                   alt="Mastercard"
                   width={100}
                   height={100}
            />

            <hr/>
            <h3>Button</h3>
            <Button appearance="primary"
                    icon={{className: classes.buttonIcon, children: <CallEndRegular/>}}
                    className={classes.roundButton}
                    style={{'marginRight': '1rem'}}>
                Get started
            </Button>
            &nbsp;
            <CompoundButton
                icon={<CalendarMonthRegular />}
                secondaryContent="Secondary content"
                {...CompoundButtonProps}
            >
                CompoundButton
            </CompoundButton>

            <hr/>
            <h3>Link</h3>
            <Link href="/test" className={classes.link}>Link w/ typographyStyles.title2</Link>

            <hr/>
            <h3>Tooltip</h3>
            <div style={{display: "flex", gap: 10}}>
                <Popover>
                    <PopoverTrigger>
                        <Button appearance="primary">Tooltip Top</Button>
                    </PopoverTrigger>
                    <PopoverSurface style={{minWidth: 100}}>Container</PopoverSurface>
                </Popover>

                <Popover positioning='after'>
                    <PopoverTrigger disableButtonEnhancement>
                        <Button appearance="primary">Tooltip After</Button>
                    </PopoverTrigger>

                    <PopoverSurface style={{minWidth: 100}}>Container</PopoverSurface>
                </Popover>

                <Popover positioning={{position: "above", align: "start", target}}>
                    <PopoverTrigger disableButtonEnhancement>
                        <Button appearance="primary">Tooltip Target</Button>
                    </PopoverTrigger>

                    <PopoverSurface style={{minWidth: 100}}>Container</PopoverSurface>
                </Popover>
                <Button ref={setTarget}>Target</Button>

                <InfoLabel
                    info={
                        <>
                            This is example information for an InfoLabel.{" "}
                            <Link href="https://react.fluentui.dev">Learn more</Link>
                        </>
                    }
                    {...InfoLabelProps}
                >
                    InfoLabel Example
                </InfoLabel>
            </div>

            <hr/>
            <h3>Menu</h3>
            <Menu>
                <MenuTrigger>
                    <SplitButton appearance="primary" menuButton={MenuButtonProps}>Show Menu</SplitButton>
                </MenuTrigger>
                <MenuPopover>
                    <MenuList>
                        <MenuItem>New </MenuItem>
                        <MenuItem>New Window</MenuItem>
                        <MenuItem disabled>Open File</MenuItem>
                        <MenuItem>Open Folder</MenuItem>
                    </MenuList>
                </MenuPopover>
            </Menu>

            <hr/>
            <h3>Spin Button</h3>
            <Label {...LabelProps} htmlFor="example-spinbutton">A SpinButton</Label>
            <br/>
            <SpinButton id="example-spinbutton" defaultValue={10} />

            <hr/>
            <h3>Accordion</h3>
            <Accordion collapsible={true}>
                <AccordionItem value="1">
                    <AccordionHeader>Accordion Header 1</AccordionHeader>
                    <AccordionPanel>
                        <div>Accordion Panel 1</div>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem value="2">
                    <AccordionHeader>Accordion Header 2</AccordionHeader>
                    <AccordionPanel>
                        <div>Accordion Panel 2</div>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem value="3">
                    <AccordionHeader>Accordion Header 3</AccordionHeader>
                    <AccordionPanel>
                        <div>Accordion Panel 3</div>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

            <hr/>
            <h3>Card</h3>
            <Card className={classes.card}>
                <CardHeader
                    image={
                        <img
                            src={resolveAsset("avatar_elvia.svg")}
                            alt="Elvia Atkins avatar picture"
                        />
                    }
                    header={
                        <Body1>
                            <b>Elvia Atkins</b> mentioned you
                        </Body1>
                    }
                    description={<Caption1>5h ago · About us - Overview</Caption1>}
                />

                <CardPreview
                    logo={
                        <img src={resolveAsset("docx.png")} alt="Microsoft Word document" />
                    }
                >
                    <img
                        src={resolveAsset("doc_template.png")}
                        alt="Preview of a Word document: About Us - Overview"
                    />
                </CardPreview>

                <CardFooter>
                    <Button icon={<ArrowReplyRegular fontSize={16} />}>Reply</Button>
                    <Button icon={<ShareRegular fontSize={16} />}>Share</Button>
                </CardFooter>
            </Card>

            <hr/>
            <h3>Dialog</h3>
            <Dialog>
                <DialogTrigger disableButtonEnhancement>
                    <Button>Open dialog</Button>
                </DialogTrigger>
                <DialogSurface>
                    <DialogBody>
                        <DialogTitle>Dialog title</DialogTitle>
                        <DialogContent>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                            exercitationem cumque repellendus eaque est dolor eius expedita
                            nulla ullam? Tenetur reprehenderit aut voluptatum impedit voluptates
                            in natus iure cumque eaque?
                        </DialogContent>
                        <DialogActions>
                            <DialogTrigger disableButtonEnhancement>
                                <Button appearance="secondary">Close</Button>
                            </DialogTrigger>
                            <Button appearance="primary">Do Something</Button>
                        </DialogActions>
                    </DialogBody>
                </DialogSurface>
            </Dialog>

            <hr/>
            <h3>Rating</h3>
            <Rating />

            <hr/>
            <h3>SearchBox</h3>
            <Field label="Sample SearchBox">
                <SearchBox />
            </Field>

            <hr/>
            <h3>Spinner</h3>
            <Spinner />

            <hr/>
            <h3>Toaster</h3>
            <Toaster toasterId={toasterId} />
            <Button onClick={notify}>Make toast</Button>

            <hr/>
            <h3>DatePicker</h3>
            <Field label="Select a date">
                <DatePicker
                    className={classes.control}
                    placeholder="Select a date..."
                />
            </Field>
        </main>
    );

}
