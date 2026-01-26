---
type: property
interface: IPropertyManagerPageTab
member: AddGroupBox
returns: System.Object
parameters:
  -
    name: ID
    type: System.Int32
    description: Resource ID of the group box
  -
    name: Caption
    type: System.String
    description: Title of the group box
  -
    name: Options
    type: System.Int32
    description: Options as defined in swAddGroupBoxOptions_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IPropertyManagerPageTab.IAddGroupBox
keywords:
  - addgroupbox
  - ipropertymanagerpagetab
  - manager
  - page
  - tab
  - add
  - group
  - box
  - id
  - int32
  - caption
  - string
  - options
  - object
  - ipropertymanagerpage2
readonly: null
---

# IPropertyManagerPageTab.AddGroupBox

Adds a group box to this tab on a PropertyManager page.

## Signature

```csharp
System.Object AddGroupBox( 
   System.Int32
ID
,
   System.String
Caption
,
   System.Int32
Options
)
```
## Parameters

- `ID` (System.Int32): Resource ID of the group box
- `Caption` (System.String): Title of the group box
- `Options` (System.Int32): Options as defined in swAddGroupBoxOptions_e

## Return Value

Newly created PropertyManager Page group box

## Remarks

You can only use this method to set properties on the PropertyManager page before it is displayed or while it is closed. See
IPropertyManagerPage2::Show2
and
IPropertyManagerPage2::Close
.
To change the title of an existing group box, use
IPropertyManagerPageTab::Caption
.

## Examples

- IPropertyManagerPage2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPropertyManagerPage2)

## See Also

- `IPropertyManagerPageTab.IAddGroupBox`