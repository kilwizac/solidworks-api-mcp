---
type: property
interface: ISldWorks
member: CreatePropertyManagerPage
returns: System.Object
parameters:
  -
    name: Title
    type: System.String
    description: Title of the page
  -
    name: Options
    type: System.Int32
    description: Options as defined in swPropertyManagerPageOptions_e
  -
    name: Handler
    type: System.Object
    description: Pointer to the event handler for this page ( IPropertyManagerPage2Handler5 )
  -
    name: Errors
    type: System.Int32
    description: Status of the creation as defined in swPropertyManagerPageStatus_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.ICreatePropertyManagerPage
keywords:
  - propertymanager
  - page
  - see
  - also
  - ipropertymanagerpage2
  - create
  - createpropertymanagerpage
  - isldworks
  - sld
  - works
  - manager
  - title
  - string
  - options
  - int32
  - handler
  - object
  - errors
readonly: null
---

# ISldWorks.CreatePropertyManagerPage

Creates a PropertyManager page.

## Signature

```csharp
System.Object CreatePropertyManagerPage( 
   System.String
Title
,
   System.Int32
Options
,
   System.Object
Handler
,
   out System.Int32
Errors
)
```
## Parameters

- `Title` (System.String): Title of the page
- `Options` (System.Int32): Options as defined in swPropertyManagerPageOptions_e
- `Handler` (System.Object): Pointer to the event handler for this page ( IPropertyManagerPage2Handler5 )
- `Errors` (System.Int32): Status of the creation as defined in swPropertyManagerPageStatus_e

## Return Value

PropertyManager page

## Remarks

Specify swPropertyManagerPageOptions_e.swPropertyManagerOptions_LockedPage in the Options parameter when you create your PropertyManager page. It is important that when a handler (such as
IPropertyManagerPage2Handler5::OnButtonPress
or
IPropertyManagerPage2Handler5::OnClose
) is finished and control returns to SOLIDWORKS that the PropertyManager page is still there. If the PropertyManager page is not there, SOLIDWORKS might crash. Some methods try to close the PropertyManager page, but you can avoid this scenario by creating the PropertyManager page as Locked.

## Examples

- IPropertyManagerPage2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPropertyManagerPage2)

## See Also

- `ISldWorks.ICreatePropertyManagerPage`