---
type: property
interface: IPropertyManagerPage2
member: IAddControl
returns: PropertyManagerPageControl
parameters:
  -
    name: ID
    type: System.Int32
    description: Resource ID of this control; API passes this user-defined value back to the add-in through the IPropertyManagerPage2Handler8 interface
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
    description: Left-align property of this control as defined in swPropertyManagerPageControlLeftAlign_e
  -
    name: Options
    type: System.Int32
    description: Options as defined in swAddControlOptions_e
  -
    name: Tip
    type: System.String
    description: ToolTip for this control
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - ui
related: []
keywords:
  - iaddcontrol
  - ipropertymanagerpage2
  - manager
  - page2
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
  - page
  - up
  - propertymanager
  - slider
readonly: null
---

# IPropertyManagerPage2.IAddControl

Obsolete. Superseded by IPropertyManagerPage2::AddControl2.

## Signature

```csharp
PropertyManagerPageControl IAddControl( 
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

- `ID` (System.Int32): Resource ID of this control; API passes this user-defined value back to the add-in through the IPropertyManagerPage2Handler8 interface
- `ControlType` (System.Int16): Type of control as defined in swPropertyManagerPageControlType_e
- `Caption` (System.String): Caption of this control
- `LeftAlign` (System.Int16): Left-align property of this control as defined in swPropertyManagerPageControlLeftAlign_e
- `Options` (System.Int32): Options as defined in swAddControlOptions_e
- `Tip` (System.String): ToolTip for this control

## Return Value

Newly created PropertyManage page control

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
IPropertyManagerPageGroup::AddControl
or IPropertyManagerPageGroup::IAddControl to add controls for the page inside group boxes.
When you specify swControlOptions_SmallGapAbove for the Options parameter, a gap, smaller than the typical gap, is used between a new control and the previous control.

## Examples

- Set Up PropertyManager Page Slider Control (C++) (Set_Up_PropertyManager_Page_Slider_Control_Example_CPlusPlus_COM.htm)