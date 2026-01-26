---
type: method
interface: IModeler
member: ICopyWizardHole
returns: System.Int32
parameters:
  -
    name: SourceHole
    type: Feature
    description: Source hole
  -
    name: DestinationHole
    type: Feature
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
  - IModeler.CopyWizardHole
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
  - icopywizardhole
  - imodeler
  - modeler
  - source
  - feature
  - destination
  - rebuild
  - owner
  - boolean
  - int32
---

# IModeler.ICopyWizardHole

Copies hole data from the source hole to the destination hole.

## Signature

```csharp
System.Int32 ICopyWizardHole( 
   Feature
SourceHole
,
   Feature
DestinationHole
,
   System.Boolean
RebuildOwner
)
```
## Parameters

- `SourceHole` (Feature): Source hole
- `DestinationHole` (Feature): Destination hole
- `RebuildOwner` (System.Boolean): True rebuilds the model, false does not

## Return Value

0 if the call generated an error; 1 if the call did not generate an error

## See Also

- `IModeler.CopyWizardHole`
- `IWizardHoleFeatureData2`