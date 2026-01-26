---
type: method
interface: IMacroFeatureData
member: IGetSelections3
returns: void
parameters:
  -
    name: SelCount
    type: System.Int32
    description: Number of selected objects
  -
    name: Objects
    type: System.Object
    description: Array of selected objects of size SelCount
  -
    name: ObjectTypes
    type: System.Int32
    description: Array of the selected object types as defined in swSelectType_e of size SelCount
  -
    name: SelMarks
    type: System.Int32
    description: Array of marks associated with the selected objects of size SelCount
  -
    name: DrViews
    type: View
    description: Array of drawing views of size SelCount
  -
    name: ComponentXForms
    type: MathTransform
    description: in-process, unmanaged C++: Pointer to an array of transforms for the selections' component s VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IMacroFeatureData.GetSelections3
  - IMacroFeatureData.ISetSelections2
  - IMacroFeatureData.SetSelections2
keywords:
  - igetselections3
  - imacrofeaturedata
  - macro
  - feature
  - data
  - selections3
  - sel
  - count
  - int32
  - objects
  - object
  - types
  - marks
  - dr
  - views
  - view
  - component
  - forms
  - math
  - transform
  - void
---

# IMacroFeatureData.IGetSelections3

Gets the selected objects for the macro feature.

## Signature

```csharp
void IGetSelections3( 
   System.Int32
SelCount
,
   out System.Object
Objects
,
   out System.Int32
ObjectTypes
,
   out System.Int32
SelMarks
,
   out View
DrViews
,
   out MathTransform
ComponentXForms
)
```
## Parameters

- `SelCount` (System.Int32): Number of selected objects
- `Objects` (System.Object): Array of selected objects of size SelCount
- `ObjectTypes` (System.Int32): Array of the selected object types as defined in swSelectType_e of size SelCount
- `SelMarks` (System.Int32): Array of marks associated with the selected objects of size SelCount
- `DrViews` (View): Array of drawing views of size SelCount
- `ComponentXForms` (MathTransform): in-process, unmanaged C++: Pointer to an array of transforms for the selections' component s VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

Before calling this method, call
IMacroFeatureData::GetSelectionCount
to determine the size of the arrays.
When a macro feature is inserted in-context and an entity on a different component is selected, you may need to know that component's transform.
If the assembly is the active document, then you can use
IEntity::IGetComponent2
or
IComponent2::Transform2
to get the component's transform.
However, if the part for the component is open for editing and a
macro feature is being edited
, then you must use I
MacroFeatureData::GetSelections3 to get the component's transform. This method returns the transform and the selection. If the selection belongs to the same part as the macro feature, then NULL is returned. See also
Macro Features and Component Transforms
.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IMacroFeatureData.GetSelections3`
- `IMacroFeatureData.ISetSelections2`
- `IMacroFeatureData.SetSelections2`