---
type: method
interface: IModeler
member: CheckInterference
returns: System.Boolean
parameters:
  -
    name: Body1
    type: System.Object
    description: First body to check for interference
  -
    name: Body2
    type: System.Object
    description: Second body to check for interference
  -
    name: CoincidentInterference
    type: System.Boolean
    description: True to check for coincident interference, false to not
  -
    name: Body1InterferedFaceArray
    type: System.Object
    description: Array of faces that have interfered from the first body with the second body
  -
    name: Body2InterferedFaceArray
    type: System.Object
    description: Array of faces that have interfered from the second body with the first body
  -
    name: IntersectedBodyArray
    type: System.Object
    description: Array of the interfering bodies
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - IAssemblyDoc.IToolsCheckInterference3
  - IAssemblyDoc.ToolsCheckInterference2
  - IModeler.ICheckInterferenceCount2
keywords:
  - checkinterference
  - imodeler
  - modeler
  - check
  - interference
  - body1
  - object
  - body2
  - coincident
  - boolean
  - interfered
  - face
  - array
  - intersected
  - body
  - using
  - vba
---

# IModeler.CheckInterference

Obsolete. Superseded by IModeler::CheckInterference3.

## Signature

```csharp
System.Boolean CheckInterference( 
   System.Object
Body1
,
   System.Object
Body2
,
   System.Boolean
CoincidentInterference
,
   out System.Object
Body1InterferedFaceArray
,
   out System.Object
Body2InterferedFaceArray
,
   out System.Object
IntersectedBodyArray
)
```
## Parameters

- `Body1` (System.Object): First body to check for interference
- `Body2` (System.Object): Second body to check for interference
- `CoincidentInterference` (System.Boolean): True to check for coincident interference, false to not
- `Body1InterferedFaceArray` (System.Object): Array of faces that have interfered from the first body with the second body
- `Body2InterferedFaceArray` (System.Object): Array of faces that have interfered from the second body with the first body
- `IntersectedBodyArray` (System.Object): Array of the interfering bodies

## Return Value

True if successful, false if not

## Remarks

Each body must be transformed in the coordinate space of the top-level assembly so that it is positioned the same with respect to the other bodies as it is in assembly space.
To align the two bodies, apply the transformation from
IComponent2::Transform2
using
IBody2::ApplyTransform
.

## Examples

- Check Interference Using IModeler::CheckInterference (VBA) (Check_Interference_using_Modeler_CheckInterference_Example_VB.htm)

## See Also

- `IAssemblyDoc.IToolsCheckInterference3`
- `IAssemblyDoc.ToolsCheckInterference2`
- `IModeler.ICheckInterferenceCount2`