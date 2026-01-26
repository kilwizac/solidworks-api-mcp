---
type: method
interface: IModeler
member: ICheckInterference3
returns: System.Boolean
parameters:
  -
    name: Body1InterferedFaceArray
    type: Face2
    description: Array of faces that have interfered from the first body with the second body
  -
    name: Body2InterferedFaceArray
    type: Face2
    description: Array of faces that interfered from the second body with the first body
  -
    name: IntersectedBodyArray
    type: Body2
    description: Array of interfering bodies
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IAssemblyDoc.IToolsCheckInterference3
  - IAssemblyDoc.ToolsCheckInterference2
  - IModeler.CheckInterference3
  - IModeler.ICheckInterferenceCount3
keywords:
  - check
  - interference
  - detection
  - icheckinterference3
  - imodeler
  - modeler
  - interference3
  - body1
  - interfered
  - face
  - array
  - face2
  - body2
  - intersected
  - body
  - boolean
---

# IModeler.ICheckInterference3

Checks the interference among the specified bodies.

## Signature

```csharp
System.Boolean ICheckInterference3( 
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

- `Body1InterferedFaceArray` (Face2): Array of faces that have interfered from the first body with the second body
- `Body2InterferedFaceArray` (Face2): Array of faces that interfered from the second body with the first body
- `IntersectedBodyArray` (Body2): Array of interfering bodies

## Return Value

True if a clash occurred, false if not

## Remarks

Before calling this method, call
IModeler::ICheckInterferenceCount3
to allocate memory for the arrays returned from this method.

## See Also

- `IAssemblyDoc.IToolsCheckInterference3`
- `IAssemblyDoc.ToolsCheckInterference2`
- `IModeler.CheckInterference3`
- `IModeler.ICheckInterferenceCount3`