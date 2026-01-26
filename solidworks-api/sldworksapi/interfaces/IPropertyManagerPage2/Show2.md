---
type: method
interface: IPropertyManagerPage2
member: Show2
returns: System.Int32
parameters:
  -
    name: Options
    type: System.Int32
    description: Options as defined in swPropertyManagerPageShowOptions_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IPropertyManagerPage2.AddControl
  - IPropertyManagerPage2.AddGroupBox
  - IPropertyManagerPage2.Close
  - IPropertyManagerPage2.SetTitleBitmap2
keywords:
  - propertymanager
  - page
  - see
  - also
  - ipropertymanagerpage2
  - show
  - show2
  - manager
  - page2
  - options
  - int32
---

# IPropertyManagerPage2.Show2

Shows the PropertyManager page.

## Signature

```csharp
System.Int32 Show2( 
   System.Int32
Options
)
```
## Parameters

- `Options` (System.Int32): Options as defined in swPropertyManagerPageShowOptions_e

## Return Value

Status as defined by swPropertyManagerPageStatus_e

## Remarks

If another PropertyManager page is already displayed and that page is receptive to being stacked upon, then setting swPropertyManagerPageShowOptions_e to swPropertyManagerPageShowOptions_StackPage will stack your PropertyManager page on it. When the user closes your PropertyManager page, the previous PropertyManager page is shown automatically.
NOTE:
Typically SOLIDWORKS does not stack PropertyManager pages, and in the couple instances where SOLIDWORKS does, it is an agreement between the PropertyManager pages. The first PropertyManager page agrees that it can be stacked upon and allows the other known PropertyManager page to stack upon it. The mechanism is not a case of one PropertyManager page allowing any other generic PropertyManager page to be stacked upon it. It is assumed that the two pages are in agreement about what is going on and deal with it.
Using the API to stack ProertyManager pages is the same -- an add-in is the owner of both PropertyManager pages and knows what is going on and deals with it.  The concept of an API PropertyManager page wanting to know if it can stack upon the currently displayed PropertyManager page, whatever it might be, does not work because of the assumption that the first API PropertyManager page has knowledge of and allows another API PropertyManager page to stack on it.
If the PropertyManager page is locked, then stacking PropertyManager pages is not allowed. A PropertyManager page is locked if the Options argument of
ISldWorks::CreatePropertyManagerPage
or
ISldWorks::ICreatePropertyManagerPage
was set to swPropertyManagerOptions_LockedPage when the PropertyManager page was created.

## Examples

- IPropertyManagerPage2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPropertyManagerPage2)

## See Also

- `IPropertyManagerPage2.AddControl`
- `IPropertyManagerPage2.AddGroupBox`
- `IPropertyManagerPage2.Close`
- `IPropertyManagerPage2.SetTitleBitmap2`