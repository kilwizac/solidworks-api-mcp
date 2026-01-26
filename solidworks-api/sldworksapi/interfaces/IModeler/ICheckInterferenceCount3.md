---
type: method
interface: IModeler
member: ICheckInterferenceCount3
returns: System.Boolean
parameters:
  -
    name: NumOfTargetBodies
    type: System.Int32
    description: Number of target bodies
  -
    name: TargetBodies
    type: Body2
    description: Array of target bodies
  -
    name: NumOfToolBodies
    type: System.Int32
    description: Number of tool bodies
  -
    name: ToolBodies
    type: Body2
    description: Array of tool bodies
  -
    name: Options
    type: System.Int32
    description: Check interference options as defined by swCheckInterferenceOption_e
  -
    name: NumBody1InterferedFaceArray
    type: System.Int32
    description: Number of faces that interfered from the first body with the second body
  -
    name: NumBody2InterferedFaceArray
    type: System.Int32
    description: Number of faces that interfered from the second body with the first body
  -
    name: NumIntersectedBodyArray
    type: System.Int32
    description: Number of interfering bodies
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IAssemblyDoc.IToolsCheckInterference3
  - IAssemblyDoc.ToolsCheckInterference2
  - IModeler.CheckInterference3
  - IModeler.ICheckInterference3
keywords:
  - check
  - interference
  - detection
  - icheckinterferencecount3
  - imodeler
  - modeler
  - count3
  - num
  - target
  - bodies
  - int32
  - body2
  - tool
  - options
  - body1
  - interfered
  - face
  - array
  - intersected
  - body
  - boolean
---

# IModeler.ICheckInterferenceCount3

Checks interference among the specified bodies and returns the number of interferences.

## Signature

```csharp
System.Boolean ICheckInterferenceCount3( 
   System.Int32
NumOfTargetBodies
,
   ref Body2
TargetBodies
,
   System.Int32
NumOfToolBodies
,
   ref Body2
ToolBodies
,
   System.Int32
Options
,
   out System.Int32
NumBody1InterferedFaceArray
,
   out System.Int32
NumBody2InterferedFaceArray
,
   out System.Int32
NumIntersectedBodyArray
)
```
## Parameters

- `NumOfTargetBodies` (System.Int32): Number of target bodies
- `TargetBodies` (Body2): Array of target bodies
- `NumOfToolBodies` (System.Int32): Number of tool bodies
- `ToolBodies` (Body2): Array of tool bodies
- `Options` (System.Int32): Check interference options as defined by swCheckInterferenceOption_e
- `NumBody1InterferedFaceArray` (System.Int32): Number of faces that interfered from the first body with the second body
- `NumBody2InterferedFaceArray` (System.Int32): Number of faces that interfered from the second body with the first body
- `NumIntersectedBodyArray` (System.Int32): Number of interfering bodies

## Return Value

Unknown.

## Remarks

Call this method before calling
IModeler::ICheckInterference3
to get the size of the arrays for that method.

## See Also

- `IAssemblyDoc.IToolsCheckInterference3`
- `IAssemblyDoc.ToolsCheckInterference2`
- `IModeler.CheckInterference3`
- `IModeler.ICheckInterference3`