---
type: method
interface: IAssemblyDoc
member: CollectAllSupportiveMates
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related: []
keywords:
  - collectallsupportivemates
  - iassemblydoc
  - assembly
  - doc
  - collect
  - all
  - supportive
  - mates
  - object
  - imatecontrollerfeaturedata
---

# IAssemblyDoc.CollectAllSupportiveMates

Gets all mates supportive of a mate controller in this assembly.

## Signature

```csharp
System.Object CollectAllSupportiveMates()
```
## Parameters

None.

## Return Value

Array of supportive mates

## Remarks

This method is valid only if
IAssemblyDoc::IsSupportedMatesAvailable
is true.
To create a mate controller, see the Remarks section of
IMateControllerFeatureData
.
For more information about the Mate Controller feature, see the
SOLIDWORKS Design user-interface help > Assemblies > Mates > Mate Controller
topic.

## Examples

- IMateControllerFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMateControllerFeatureData)