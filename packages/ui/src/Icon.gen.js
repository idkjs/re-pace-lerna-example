/** 
 * @flow strict
 * @generated
 * @nolint
 */
/* eslint-disable */

const $$toRE430912857 = {"normal": 812216871, "small": -9768761, "xs": 26875};

// $FlowExpectedError: Reason checked type sufficiently
import * as Curry from 'bs-platform/lib/es6/curry.js';

// $FlowExpectedError: Reason checked type sufficiently
import * as IconBS from './Icon.bs';

// $FlowExpectedError: Reason checked type sufficiently
import * as ReasonReact from 'reason-react/src/ReasonReact.js';

// flowlint-next-line nonstrict-import:off
import type {iconType as Icons_iconType} from './Icons.gen';

export type bsSize = "normal" | "small" | "xs";

export type Props = {|
  +iconType: Icons_iconType, 
  +disabled?: boolean, 
  +bsSize?: bsSize, 
  +children?: mixed
|};

export const component: React$ComponentType<Props> = ReasonReact.wrapReasonForJs(
  IconBS.component,
  (function _(jsProps: Props) {
     return Curry._4(IconBS.make, jsProps.iconType, jsProps.disabled, (jsProps.bsSize == null ? undefined : $$toRE430912857[jsProps.bsSize]), jsProps.children);
  }));

export default component;