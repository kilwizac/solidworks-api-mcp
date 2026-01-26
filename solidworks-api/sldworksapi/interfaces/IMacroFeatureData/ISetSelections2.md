---
type: method
interface: IMacroFeatureData
member: ISetSelections2
returns: void
parameters:
  -
    name: SelCount
    type: System.Int32
    description: Number of selected objects
  -
    name: Objects
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of objects as defined in swSelectType_e of size SelCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: SelMarks
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of marks (integers or longs) of size SelCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: DrViews
    type: View
    description: in-process, unmanaged C++: Pointer to an array of drawing views of size selCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IMacroFeatureData.GetSelectionCount
  - IMacroFeatureData.GetSelections3
  - IMacroFeatureData.IGetSelections3
  - IMacroFeatureData.SetSelections2
keywords:
  - isetselections2
  - imacrofeaturedata
  - macro
  - feature
  - data
  - selections2
  - sel
  - count
  - int32
  - objects
  - object
  - marks
  - dr
  - views
  - view
  - void
---

# IMacroFeatureData.ISetSelections2

Sets the selected objects for the macro feature.

## Signature

```csharp
void ISetSelections2( 
   System.Int32
SelCount
,
   ref System.Object
Objects
,
   ref System.Int32
SelMarks
,
   ref View
DrViews
)
```
## Parameters

- `SelCount` (System.Int32): Number of selected objects
- `Objects` (System.Object): in-process, unmanaged C++: Pointer to an array of objects as defined in swSelectType_e of size SelCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `SelMarks` (System.Int32): in-process, unmanaged C++: Pointer to an array of marks (integers or longs) of size SelCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `DrViews` (View): in-process, unmanaged C++: Pointer to an array of drawing views of size selCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

The method expects to be passed three arrays of the same size.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IMacroFeatureData.GetSelectionCount`
- `IMacroFeatureData.GetSelections3`
- `IMacroFeatureData.IGetSelections3`
- `IMacroFeatureData.SetSelections2`