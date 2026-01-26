---
type: property
interface: IPropertyManagerPageTab
member: AddControl
returns: System.Object
parameters:
  -
    name: ID
    type: System.Int32
    description: Resource ID of this control
  -
    name: ControlType
    type: System.Int16
    description: Type of control as defined in swPropertyManagerPageControlType_e
  -
    name: Caption
    type: System.String
    description: Caption of the control
  -
    name: LeftAlign
    type: System.Int16
    description: Left alignment of this control as defined in swPropertyManagerPageControlLeftAlign_e
  -
    name: Options
    type: System.Int32
    description: Options as defined in swAddControlOptions_e (see Remarks )
  -
    name: Tip
    type: System.String
    description: Tool tip text for the control
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - ui
related:
  - IPropertyManagerPageTab.IAddControl
keywords:
  - addcontrol
  - ipropertymanagerpagetab
  - manager
  - page
  - tab
  - add
  - control
  - id
  - int32
  - type
  - int16
  - caption
  - string
  - left
  - align
  - options
  - tip
  - object
readonly: null
---

# IPropertyManagerPageTab.AddControl

Obsolete. Superseded by IPropertyManagerPageTab::AddControl2.

## Signature

```csharp
System.Object AddControl( 
   System.Int32
ID
,
   System.Int16
ControlType
,
   System.String
Caption
,
   System.Int16
LeftAlign
,
   System.Int32
Options
,
   System.String
Tip
)
```
## Parameters

- `ID` (System.Int32): Resource ID of this control
- `ControlType` (System.Int16): Type of control as defined in swPropertyManagerPageControlType_e
- `Caption` (System.String): Caption of the control
- `LeftAlign` (System.Int16): Left alignment of this control as defined in swPropertyManagerPageControlLeftAlign_e
- `Options` (System.Int32): Options as defined in swAddControlOptions_e (see Remarks )
- `Tip` (System.String): Tool tip text for the control

## Return Value

Newly created PropertyManager page tab control

## Remarks

You can only use this method to set properties on the PropertyManager page before it is displayed or while it is closed. See
IPropertyManagerPage2::Show2
and
IPropertyManagerPage2::Close
.
This method associates controls with a tab. When a user clicks a tab, controls associated with that tab are automatically shown and controls not associated with that tab are automatically hidden.
However, any controls added to a tab using
IPropertyManagerPage2::AddControl
or
IPropertyManagerPage2::IAddControl
are not associated with the tab; you must still hide and show those controls. But, because the name of this method and its parameters are identical to IPropertyManagerPage2::AddControl or IPropertyManagerPage2::IAddControl, switching to this method and cleaning up your handler code should be easy.
To add a control to a group box associated with a tab, add the controls from the
group box
. Only use this method to add controls not associated with group boxes.
When you specify swControlOptions_SmallGapAbove for the Options parameter, gap is used between a new control and the previous control that is smaller than the typical gap.

## See Also

- `IPropertyManagerPageTab.IAddControl`