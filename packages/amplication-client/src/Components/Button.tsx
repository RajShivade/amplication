import React from "react";
import {
  Button as PrimerButton,
  ButtonProps as PrimerButtonProps,
} from "@primer/components";
import classNames from "classnames";
import { Icon } from "@rmwc/icon";
import { isEmpty } from "lodash";
import "./Button.scss";

export enum EnumButtonStyle {
  Primary = "primary",
  Secondary = "secondary",
  Clear = "clear",
}

type ButtonProps = {
  /** The display style of the button */
  buttonStyle?: EnumButtonStyle;
  /** Whether to show an expand icon in the button. Ignored when buttonStyle is "Clear" */
  isSplit?: boolean;
  icon?: string;
};

export type Props = PrimerButtonProps & ButtonProps;

export const Button = ({
  buttonStyle = EnumButtonStyle.Primary,
  className,
  isSplit,
  children,
  icon,
  ...rest
}: Props) => {
  if (buttonStyle === EnumButtonStyle.Clear && isSplit) {
    throw new Error("isSplit must not be true if buttonStyle is Clear");
  }
  return (
    <PrimerButton
      className={classNames(
        "amp-button",
        className,
        {
          "amp-button--split": isSplit,
        },
        `amp-button--${buttonStyle}`
      )}
      {...rest}
    >
      {!isEmpty(icon) && <Icon icon={icon} className="amp-button__icon" />}
      {children}
      {isSplit && <Icon icon="expand_more" className="icon-split" />}
    </PrimerButton>
  );
};
