---
type: method
interface: IAssemblyDoc
member: ToolsCheckInterference2
returns: void
parameters:
  -
    name: NumComponents
    type: System.Int32
    description: Number of components to check
  -
    name: LpComponents
    type: System.Object
    description: Array of components being checked for interference
  -
    name: CoincidentInterference
    type: System.Boolean
    description: True to treat coincident entities as interference, false to not
  -
    name: PComp
    type: System.Object
    description: Array of components where interferences have been found
  -
    name: PFace
    type: System.Object
    description: Array of faces where interferences have been found
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.IToolsCheckInterference3
  - IInterference
  - IInterferenceDetectionMgr
  - IModeler.CheckInterference3
  - IModeler.ICheckInterference3
  - IModeler.ICheckInterferenceCount3
keywords:
  - toolscheckinterference2
  - iassemblydoc
  - assembly
  - doc
  - tools
  - check
  - interference2
  - num
  - components
  - int32
  - lp
  - object
  - coincident
  - interference
  - boolean
  - comp
  - face
  - void
  - vba
---

# IAssemblyDoc.ToolsCheckInterference2

Checks for interference between parts in this assembly.

## Signature

```csharp
void ToolsCheckInterference2( 
   System.Int32
NumComponents
,
   System.Object
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
- `LpComponents` (System.Object): Array of components being checked for interference
- `CoincidentInterference` (System.Boolean): True to treat coincident entities as interference, false to not
- `PComp` (System.Object): Array of components where interferences have been found
- `PFace` (System.Object): Array of faces where interferences have been found

## Return Value

Unknown.

## Remarks

This method returns:
an empty array of faces for components that have coincident faces that touch.
an array of components for components that touch.
For each face that intersects, there is a corresponding component.
NOTE:
The obsolete method, IAssemblyDoc::ToolsCheckInterference, displays the Interference Detection PropertyManager, but this method does not.

## Examples

- Check Interference (VBA) (Check_Interference_using_AssemblyDoc_ToolsCheckInterference2_Example_VB.htm)

## See Also

- `IAssemblyDoc.IToolsCheckInterference3`
- `IInterference`
- `IInterferenceDetectionMgr`
- `IModeler.CheckInterference3`
- `IModeler.ICheckInterference3`
- `IModeler.ICheckInterferenceCount3`