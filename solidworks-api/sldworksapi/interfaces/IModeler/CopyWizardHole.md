---
type: method
interface: IModeler
member: CopyWizardHole
returns: System.Int32
parameters:
  -
    name: SourceHole
    type: System.Object
    description: Source hole
  -
    name: DestinationHole
    type: System.Object
    description: Destination hole
  -
    name: RebuildOwner
    type: System.Boolean
    description: True rebuilds the model, false does not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.ICopyWizardHole
  - IWizardHoleFeatureData2
keywords:
  - holes
  - see
  - also
  - isimpleholefeaturedata2
  - iwizardholefeaturedata2
  - interfaces
  - copy
  - wizard
  - hole
  - copywizardhole
  - imodeler
  - modeler
  - source
  - object
  - destination
  - rebuild
  - owner
  - boolean
  - int32
---

# IModeler.CopyWizardHole

Copies hole data from the source hole to the destination hole.

## Signature

```csharp
System.Int32 CopyWizardHole( 
   System.Object
SourceHole
,
   System.Object
DestinationHole
,
   System.Boolean
RebuildOwner
)
```
## Parameters

- `SourceHole` (System.Object): Source hole
- `DestinationHole` (System.Object): Destination hole
- `RebuildOwner` (System.Boolean): True rebuilds the model, false does not

## Return Value

0 if the call generated an error; 1 if the call did not generate an error

## See Also

- `IModeler.ICopyWizardHole`
- `IWizardHoleFeatureData2`