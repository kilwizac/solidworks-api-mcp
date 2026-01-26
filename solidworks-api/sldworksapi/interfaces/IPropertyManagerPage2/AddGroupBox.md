---
type: property
interface: IPropertyManagerPage2
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
  - IPropertyManagerPage2.IAddGroupBox
keywords:
  - propertymanager
  - page
  - see
  - also
  - ipropertymanagerpage2
  - group
  - boxes
  - addgroupbox
  - manager
  - page2
  - add
  - box
  - id
  - int32
  - caption
  - string
  - options
  - object
readonly: null
---

# IPropertyManagerPage2.AddGroupBox

Adds a group box to a PropertyManager page.

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

Newly created PropertyManager page group box

## Remarks

Use this method to set properties on the PropertyManager page before the page is displayed or while it is closed. See
IPropertyManagerPage2::Show2
and
PropertyManagerPage2::Close
for details.
To change the title of an existing group box, use
IPropertyManagerPageGroup::Caption
.

## Examples

- IPropertyManagerPage2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPropertyManagerPage2)

## See Also

- `IPropertyManagerPage2.IAddGroupBox`