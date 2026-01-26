---
type: method
interface: IModeler
member: ICheckInterferenceCount2
returns: System.Boolean
parameters:
  -
    name: Body1
    type: Body2
    description: First body to check for interference
  -
    name: Body2
    type: Body2
    description: Second body to check for interference
  -
    name: CoincidentInterference
    type: System.Boolean
    description: True to check for coincident interference, false to not
  -
    name: Body1InterferedFaceCount
    type: System.Int32
    description: Number of faces that are interfering that belong to the body passed in the first parameter of this method
  -
    name: Body2InterferedFaceCount
    type: System.Int32
    description: Number of faces that are interfering that belong to the body passed in the second parameter of this method
  -
    name: IntersectedBodyCount
    type: System.Int32
    description: Number of intersection bodies produced from this intersection
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - IAssemblyDoc.IToolsCheckInterference3
  - IAssemblyDoc.ToolsCheckInterference2
  - IModeler.CheckInterference
keywords:
  - icheckinterferencecount2
  - imodeler
  - modeler
  - check
  - interference
  - count2
  - body1
  - body2
  - coincident
  - boolean
  - interfered
  - face
  - count
  - int32
  - intersected
  - body
---

# IModeler.ICheckInterferenceCount2

Obsolete. Superseded by IModeler::ICheckInterferenceCount3.

## Signature

```csharp
System.Boolean ICheckInterferenceCount2( 
   Body2
Body1
,
   Body2
Body2
,
   System.Boolean
CoincidentInterference
,
   out System.Int32
Body1InterferedFaceCount
,
   out System.Int32
Body2InterferedFaceCount
,
   out System.Int32
IntersectedBodyCount
)
```
## Parameters

- `Body1` (Body2): First body to check for interference
- `Body2` (Body2): Second body to check for interference
- `CoincidentInterference` (System.Boolean): True to check for coincident interference, false to not
- `Body1InterferedFaceCount` (System.Int32): Number of faces that are interfering that belong to the body passed in the first parameter of this method
- `Body2InterferedFaceCount` (System.Int32): Number of faces that are interfering that belong to the body passed in the second parameter of this method
- `IntersectedBodyCount` (System.Int32): Number of intersection bodies produced from this intersection

## Return Value

True if successful, false if not

## Remarks

Call
IModeler::ICheckInterference2
after calling this method.

## See Also

- `IAssemblyDoc.IToolsCheckInterference3`
- `IAssemblyDoc.ToolsCheckInterference2`
- `IModeler.CheckInterference`