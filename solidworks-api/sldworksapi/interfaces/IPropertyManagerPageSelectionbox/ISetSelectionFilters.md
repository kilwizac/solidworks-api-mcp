---
type: property
interface: IPropertyManagerPageSelectionbox
member: ISetSelectionFilters
returns: void
parameters:
  -
    name: FilterCount
    type: System.Int16
    description: Number of filters
  -
    name: Filters
    type: System.Int32
    description: in-procses, unmanaged C++: Array of filter values as defined in swSelectType_e (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related: []
keywords:
  - isetselectionfilters
  - ipropertymanagerpageselectionbox
  - manager
  - page
  - selectionbox
  - selection
  - filters
  - filter
  - count
  - int16
  - int32
  - void
readonly: null
---

# IPropertyManagerPageSelectionbox.ISetSelectionFilters

Defines the types of objects the user can select for this selection box.

## Signature

```csharp
void ISetSelectionFilters( 
   System.Int16
FilterCount
,
   ref System.Int32
Filters
)
```
## Parameters

- `FilterCount` (System.Int16): Number of filters
- `Filters` (System.Int32): in-procses, unmanaged C++: Array of filter values as defined in swSelectType_e (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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