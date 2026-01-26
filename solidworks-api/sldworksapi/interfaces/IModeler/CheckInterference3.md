---
type: method
interface: IModeler
member: CheckInterference3
returns: System.Boolean
parameters:
  -
    name: TargetBodies
    type: System.Object
    description: Target bodies
  -
    name: ToolBodies
    type: System.Object
    description: Tool bodies
  -
    name: Options
    type: System.Int32
    description: Check interference options as defined by swCheckInterferenceOption_e
  -
    name: Body1InterferedFaceArray
    type: System.Object
    description: Array of faces that interfered from the first body with the second body
  -
    name: Body2InterferedFaceArray
    type: System.Object
    description: Array of faces that interfered from the second body with the first body
  -
    name: IntersectedBodyArray
    type: System.Object
    description: Array of interfering bodies
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IAssemblyDoc.IToolsCheckInterference3
  - IAssemblyDoc.ToolsCheckInterference2
  - IInterferenceDetectionMgr
  - IModeler.CheckInterferenceBetweenTwoBodies
  - IModeler.ICheckInterference3
keywords:
  - check
  - interference
  - detection
  - checkinterference3
  - imodeler
  - modeler
  - interference3
  - target
  - bodies
  - object
  - tool
  - options
  - int32
  - body1
  - interfered
  - face
  - array
  - body2
  - intersected
  - body
  - boolean
  - among
  - vba
---

# IModeler.CheckInterference3

Checks for interferences among the specified bodies in a part.

## Signature

```csharp
System.Boolean CheckInterference3( 
   System.Object
TargetBodies
,
   System.Object
ToolBodies
,
   System.Int32
Options
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

- `TargetBodies` (System.Object): Target bodies
- `ToolBodies` (System.Object): Tool bodies
- `Options` (System.Int32): Check interference options as defined by swCheckInterferenceOption_e
- `Body1InterferedFaceArray` (System.Object): Array of faces that interfered from the first body with the second body
- `Body2InterferedFaceArray` (System.Object): Array of faces that interfered from the second body with the first body
- `IntersectedBodyArray` (System.Object): Array of interfering bodies

## Return Value

True if an interference exists, false if not

## Examples

- Check Interference Among Bodies (VBA) (Check_Interference_Among_Bodies_Example_VB.htm)

## See Also

- `IAssemblyDoc.IToolsCheckInterference3`
- `IAssemblyDoc.ToolsCheckInterference2`
- `IInterferenceDetectionMgr`
- `IModeler.CheckInterferenceBetweenTwoBodies`
- `IModeler.ICheckInterference3`