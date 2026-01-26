---
type: method
interface: IAssemblyDoc
member: IToolsCheckInterference3
returns: void
parameters:
  -
    name: NumComponents
    type: System.Int32
    description: Number of components to check
  -
    name: LpComponents
    type: Component2
    description: Array of components being checked for interference
  -
    name: CoincidentInterference
    type: System.Boolean
    description: True to check for coincident interference, false to not
  -
    name: PComp
    type: System.Object
    description: Array of components where interference has been found
  -
    name: PFace
    type: System.Object
    description: Array of faces where interference has been found
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.ToolsCheckInterference2
  - IInterference
  - IInterferenceDetectionMgr
  - IModeler.CheckInterference3
  - IModeler.ICheckInterference3
  - IModeler.ICheckInterferenceCount3
keywords:
  - itoolscheckinterference3
  - iassemblydoc
  - assembly
  - doc
  - tools
  - check
  - interference3
  - num
  - components
  - int32
  - lp
  - component2
  - coincident
  - interference
  - boolean
  - comp
  - object
  - face
  - void
---

# IAssemblyDoc.IToolsCheckInterference3

Obsolete.

## Signature

```csharp
void IToolsCheckInterference3( 
   System.Int32
NumComponents
,
   ref Component2
LpComponents
,
   System.Boolean
CoincidentInterference
,
   out System.Object
PComp
,
   out System.Object
PFace
)
```
## Parameters

- `NumComponents` (System.Int32): Number of components to check
- `LpComponents` (Component2): Array of components being checked for interference
- `CoincidentInterference` (System.Boolean): True to check for coincident interference, false to not
- `PComp` (System.Object): Array of components where interference has been found
- `PFace` (System.Object): Array of faces where interference has been found

## Return Value

Unknown.

## Remarks

This method returns:
an empty array of faces for components that have coincident faces that touch.
an array of components for components that touch.
For each face that intersects, there is a corresponding component.

## See Also

- `IAssemblyDoc.ToolsCheckInterference2`
- `IInterference`
- `IInterferenceDetectionMgr`
- `IModeler.CheckInterference3`
- `IModeler.ICheckInterference3`
- `IModeler.ICheckInterferenceCount3`