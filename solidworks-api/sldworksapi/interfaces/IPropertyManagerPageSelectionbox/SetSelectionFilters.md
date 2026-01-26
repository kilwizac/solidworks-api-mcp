---
type: property
interface: IPropertyManagerPageSelectionbox
member: SetSelectionFilters
returns: void
parameters:
  -
    name: Filters
    type: System.Object
    description: Array of filter values as defined in swSelectType_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related:
  - IPropertyManagerPageSelectionbox.ISetSelectionFilters
keywords:
  - setselectionfilters
  - ipropertymanagerpageselectionbox
  - manager
  - page
  - selectionbox
  - selection
  - filters
  - object
  - void
  - ipropertymanagerpage2
readonly: null
---

# IPropertyManagerPageSelectionbox.SetSelectionFilters

Defines the types of objects the user can select for this selection box.

## Signature

```csharp
void SetSelectionFilters( 
   System.Object
Filters
)
```
## Parameters

- `Filters` (System.Object): Array of filter values as defined in swSelectType_e (see Remarks )

## Return Value

Unknown.

## Remarks

You can only use this method to set properties on the PropertyManager page before it is displayed or while it is closed. See
IPropertyManagerPage2::Show2
and
IPropertyManagerPage2::Close
.
When a user makes a selection in the graphics area, SOLIDWORKS must decide whether to select a face, body, or component. The following table shows what appears in a selection box created with the specifed filters after a selection occurs in the graphics area.
Filters
Result
swSelFACES,  swSelSOLIDBODIES
Face
If you want a body to appear in the selection box, then use swSelSOLIDBODIESFIRST.
swSelFACES, swSelCOMPONENTS
Component
If you want a face to appear in the selection box, then use swSELCOMPSDONTOVERRIDE.
swSelSOLIDBODIES, swSelCOMPONENTS
Component
If you want a body to appear in the selection box, then use swSelSOLIDBODIESFIRST.
swSelFACES, swSelSOLIDBODIES, swSelCOMPONENTS
Component
If you want a face to appear in the selection box, then use swSelCOMPSDONTOVERRIDE.
- or -
If you want a body to appear in the selection box, then use swSelSOLIDBODIESFIRST.
swSelSURFACEBODIES and swSelSURFBODIESFIRST behave simliar to swSelSOLIDBODIES and swSelSOLIDBODIESFIRST. swSelEDGES and swSelVERTICES behave similar to swSelFACES. If the Filters is set to swSelNOTHING or swSelUNSUPPORTED, this the call to this method fails.

## Examples

- IPropertyManagerPage2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPropertyManagerPage2)

## See Also

- `IPropertyManagerPageSelectionbox.ISetSelectionFilters`