---
type: property
interface: IAssemblyDoc
member: IsSupportedMatesAvailable
returns: System.Boolean
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
  - issupportedmatesavailable
  - iassemblydoc
  - assembly
  - doc
  - supported
  - mates
  - available
  - boolean
  - imatecontrollerfeaturedata
readonly: true
---

# IAssemblyDoc.IsSupportedMatesAvailable

Gets whether this assembly contains mates that are supportive of a mate controller.

## Signature

```csharp
System.Boolean IsSupportedMatesAvailable {get;}
```
## Parameters

None.

## Return Value

True if mates supportive of a mate controller are available, false if not

## Remarks

Supportive mate types are as defined by
swMateType_e
.:
swMateANGLE
swMateDISTANCE
swMatePATH
swMateSLOT
swMateWIDTH
The Mate Controller feature does not support path, width, or slot mates created with either a free or a center in slot constraint.
If this property is true, then use
IAssemblyDoc::CollectAllSupportiveMates
to collect the supportive mates in this assembly.
To create a mate controller, see the Remarks section of
IMateControllerFeatureData
.
For more information about the Mate Controller feature, see the
SOLIDWORKS Design user-interface help > Assemblies > Mates > Mate Controller
topic.

## Examples

- IMateControllerFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMateControllerFeatureData)