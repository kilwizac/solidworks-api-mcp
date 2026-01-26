---
type: property
interface: IPropertyManagerPageTab
member: AddControl2
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
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - addcontrol2
  - ipropertymanagerpagetab
  - manager
  - page
  - tab
  - add
  - control2
  - id
  - int32
  - control
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

# IPropertyManagerPageTab.AddControl2

Adds a control to this tab on a PropertyManager page.

## Signature

```csharp
System.Object AddControl2( 
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

Newly created control for this PropertyManager page tab control

## Remarks

You can only use this method to set properties on the PropertyManager page before it is displayed or while it is closed. See
IPropertyManagerPage2::Show2
and
IPropertyManagerPage2::Close
.
This method associates controls with a tab. When a user clicks a tab, controls associated with that tab are automatically shown and controls not associated with that tab are automatically hidden. Any controls added to a tab using
IPropertyManagerPage2::AddControl2
are not associated with the tab; you must still hide and show those controls. But, because the name of this method and its parameters are identical to IPropertyManagerPage2::AddControl2, switching to this method and cleaning up your handler code should be easy.
To add a control to a group box associated with a tab, add the controls from the
group box
. Only use this method to add controls not associated with group boxes.
When you specify swAddControlOptions_e.swControlOptions_SmallGapAbove for the Options parameter, the gap created between a new control and the previous control is smaller than the typical gap. Also, the control is hidden unless you specify swAddControlOptions_e.swControlOptions_Visible for the Options parameter. In the previous versions of this method, IPropertyManagerPageTab::AddControl and IPropertyManagerPageTab::IAddControl, the control was visible regardless if the Options parameter was set or not set to swAddControlOptions_e.swControlOptions_Visible.