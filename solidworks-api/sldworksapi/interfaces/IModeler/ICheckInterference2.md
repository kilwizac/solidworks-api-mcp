---
type: method
interface: IModeler
member: ICheckInterference2
returns: void
parameters:
  -
    name: Body1InterferedFaceArray
    type: Face2
    description: Array of faces that interfered from the first body with the second body
  -
    name: Body2InterferedFaceArray
    type: Face2
    description: Array of faces that interfered from the second body with the first body
  -
    name: IntersectedBodyArray
    type: Body2
    description: Bodies generated from the intersection of the input bodies
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
  - icheckinterference2
  - imodeler
  - modeler
  - check
  - interference2
  - body1
  - interfered
  - face
  - array
  - face2
  - body2
  - intersected
  - body
  - void
---

# IModeler.ICheckInterference2

Obsolete. Superseded by IModeler::ICheckInterference3.

## Signature

```csharp
void ICheckInterference2( 
   out Face2
Body1InterferedFaceArray
,
   out Face2
Body2InterferedFaceArray
,
   out Body2
IntersectedBodyArray
)
```
## Parameters

- `Body1InterferedFaceArray` (Face2): Array of faces that interfered from the first body with the second body
- `Body2InterferedFaceArray` (Face2): Array of faces that interfered from the second body with the first body
- `IntersectedBodyArray` (Body2): Bodies generated from the intersection of the input bodies

## Return Value

Unknown.

## Remarks

Before calling this method, call
IModeler::ICheckInterferenceCount2
to allocate memory for the arrays returned from this method.

## See Also

- `IAssemblyDoc.IToolsCheckInterference3`
- `IAssemblyDoc.ToolsCheckInterference2`
- `IModeler.CheckInterference`