---
type: method
interface: IMacroFeatureData
member: GetSelections3
returns: void
parameters:
  -
    name: Objects
    type: System.Object
    description: Array of selected objects
  -
    name: ObjectTypes
    type: System.Object
    description: Array of selected object types as defined in swSelectType_e
  -
    name: SelMarks
    type: System.Object
    description: Array of marks for the selected objects
  -
    name: DrViews
    type: System.Object
    description: Array of drawing views
  -
    name: ComponentXForms
    type: System.Object
    description: Array of transforms for the selections' components
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IMacroFeatureData.GetSelectionCount
  - IMacroFeatureData.IGetSelections3
  - IMacroFeatureData.ISetSelections2
  - IMacroFeatureData.SetSelections2
keywords:
  - getselections3
  - imacrofeaturedata
  - macro
  - feature
  - data
  - selections3
  - objects
  - object
  - types
  - sel
  - marks
  - dr
  - views
  - component
  - forms
  - void
  - cut
  - body
  - half
  - using
  - vba
---

# IMacroFeatureData.GetSelections3

Gets the selected objects for the macro feature.

## Signature

```csharp
void GetSelections3( 
   out System.Object
Objects
,
   out System.Object
ObjectTypes
,
   out System.Object
SelMarks
,
   out System.Object
DrViews
,
   out System.Object
ComponentXForms
)
```
## Parameters

- `Objects` (System.Object): Array of selected objects
- `ObjectTypes` (System.Object): Array of selected object types as defined in swSelectType_e
- `SelMarks` (System.Object): Array of marks for the selected objects
- `DrViews` (System.Object): Array of drawing views
- `ComponentXForms` (System.Object): Array of transforms for the selections' components

## Return Value

Unknown.

## Remarks

When a macro feature is inserted in-context and an entity on a different component is selected, you may need to know that component's transform.
If the assembly is the active document, then you can use
IEntity::GetComponent
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

## Examples

- Cut Body in Half Using Macro Feature (VBA) (Cut_Body_in_Half_using_Macro_Feature_Example_VB.htm)

## See Also

- `IMacroFeatureData.GetSelectionCount`
- `IMacroFeatureData.IGetSelections3`
- `IMacroFeatureData.ISetSelections2`
- `IMacroFeatureData.SetSelections2`