---
type: property
interface: IPropertyManagerPage2
member: AddControl2
returns: System.Object
parameters:
  -
    name: ID
    type: System.Int32
    description: Resource ID of this control whose value is passed back to the add-in through the IPropertyManagerPage2Handler9 interface
  -
    name: ControlType
    type: System.Int16
    description: Type of control as defined in swPropertyManagerPageControlType_e
  -
    name: Caption
    type: System.String
    description: Caption of this control
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
    description: ToolTip for this control
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - propertymanager
  - page
  - see
  - also
  - ipropertymanagerpage2
  - controls
  - addcontrol2
  - manager
  - page2
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

# IPropertyManagerPage2.AddControl2

Adds a control to this PropertyManager page.

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

- `ID` (System.Int32): Resource ID of this control whose value is passed back to the add-in through the IPropertyManagerPage2Handler9 interface
- `ControlType` (System.Int16): Type of control as defined in swPropertyManagerPageControlType_e
- `Caption` (System.String): Caption of this control
- `LeftAlign` (System.Int16): Left alignment of this control as defined in swPropertyManagerPageControlLeftAlign_e
- `Options` (System.Int32): Options as defined in swAddControlOptions_e (see Remarks )
- `Tip` (System.String): ToolTip for this control

## Return Value

Newly created PropertyManager page control

## Remarks

You can only use this method to set properties on the PropertyManager before the page is displayed or while it is closed. See
IPropertyManagerPage2::Show2
and
IPropertyManagerPage2::Close
.
To follow the SOLIDWORKS standards when designing a new PropertyManager page, it is a good idea to use
IPropertyManagerPage2::AddGroupBox
or
IPropertyManagerPage2::IAddGroupBox
and
IPropertyManagerPageGroup::AddControl2
to add controls for the page inside group boxes.
When you specify swAddControlOptions_e.swControlOptions_SmallGapAbove for the Options parameter, the gap created between the new control and the previous control is smaller than a typical gap. Also, the control is hidden unless you specify swAddControlOptions_e.swControlOptions_Visible for the Options parameter. In the previous versions of this method, IPropertyManagerPage2::AddControl and IPropertyManagerPage2::IAddControl, the control was visible regardless if the Options parameter was set or not set to swAddControlOptions_e.swControlOptions_Visible.

## Examples

- IPropertyManagerPage2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPropertyManagerPage2)