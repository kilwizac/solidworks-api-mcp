---
type: method
interface: IFeatureManager
member: CreateFeature
returns: Feature
parameters:
  -
    name: FeatureData
    type: System.Object
    description: thread , sweep , library , library form tool (see Remarks ), tab/slot , bounding box , ground plane , mirror components , projection curve , sheet metal normal cut , sheet metal swept flange , sheet metal gusset , sheet metal edge flange , convert solid to sheet metal (see Remarks ), simple fillet/chamfer , belt/chain , sheet metal base flange , sheet metal corner relief , sheet metal sketched bend , mate controller , or a pattern-specific feature data object (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBaseFlangeFeatureData.Initialize
  - IConvertSolidFeatureData.Initialize
  - ICornerReliefFeatureData.Initialize
  - IFeature.GetDefinition
  - IFeatureManager.CreateDefinition
  - ILibraryFeatureData.Initialize
  - IMateControllerFeatureData.Initialize
  - ISimpleFilletFeatureData2.Initialize
  - IThreadFeatureData.InitializeThreadData
keywords:
  - feature
  - see
  - also
  - ifeature
  - holes
  - library
  - isimpleholefeaturedata2
  - iwizardholefeaturedata2
  - interfaces
  - wizard
  - ilibraryfeaturedata
  - create
  - createfeature
  - ifeaturemanager
  - manager
  - data
  - object
  - ibaseflangefeaturedata
  - ibeltchainfeaturedata
  - icornerrelieffeaturedata
  - iedgeflangefeaturedata
  - imatecontrollerfeaturedata
  - imirrorcomponentfeaturedata
  - ipartialedgefilletdata
  - isimplefilletfeaturedata2
  - isketchedbendfeaturedata
  - ismgussetfeaturedata
  - isweptflangefeaturedata
  - itabandslotfeaturedata
---

# IFeatureManager.CreateFeature

Creates the specified feature.

## Signature

```csharp
Feature CreateFeature( 
   System.Object
FeatureData
)
```
## Parameters

- `FeatureData` (System.Object): thread , sweep , library , library form tool (see Remarks ), tab/slot , bounding box , ground plane , mirror components , projection curve , sheet metal normal cut , sheet metal swept flange , sheet metal gusset , sheet metal edge flange , convert solid to sheet metal (see Remarks ), simple fillet/chamfer , belt/chain , sheet metal base flange , sheet metal corner relief , sheet metal sketched bend , mate controller , or a pattern-specific feature data object (see Remarks )

## Return Value

IFeature

## Remarks

Before calling this method to create ConvertSolid and Library form tool features, ensure that the Sheet Metal tab is visible on the CommandManager toolbar.
Use:
IFeature::GetErrorCode2
to get any errors that occurred during the creation of the feature.
IFeatureManager::GetCreateFeatureErrors
to get any errors that occurred during the creation of a Mate Controller feature.
For additional information, see:
Library Features and LibraryFeatureData Objects
Pattern Features and their Feature Data Objects
Sweep Features and SweepFeatureData Objects
Thread Features and ThreadFeatureData Objects

## Examples

- IBaseFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBaseFlangeFeatureData)
- IBeltChainFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBeltChainFeatureData)
- ICornerReliefFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerReliefFeatureData)
- IEdgeFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEdgeFlangeFeatureData)
- IMateControllerFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMateControllerFeatureData)
- IMirrorComponentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMirrorComponentFeatureData)
- IPartialEdgeFilletData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPartialEdgeFilletData)
- ISimpleFilletFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimpleFilletFeatureData2)
- ISketchedBendFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchedBendFeatureData)
- ISMGussetFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISMGussetFeatureData)
- ISweptFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweptFlangeFeatureData)
- ITabAndSlotFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ITabAndSlotFeatureData)

## See Also

- `IBaseFlangeFeatureData.Initialize`
- `IConvertSolidFeatureData.Initialize`
- `ICornerReliefFeatureData.Initialize`
- `IFeature.GetDefinition`
- `IFeatureManager.CreateDefinition`
- `ILibraryFeatureData.Initialize`
- `IMateControllerFeatureData.Initialize`
- `ISimpleFilletFeatureData2.Initialize`
- `IThreadFeatureData.InitializeThreadData`