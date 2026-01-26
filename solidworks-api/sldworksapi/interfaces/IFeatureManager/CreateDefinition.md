---
type: method
interface: IFeatureManager
member: CreateDefinition
returns: System.Object
parameters:
  -
    name: Type
    type: System.Int32
    description: Feature name ID as defined in swFeatureNameID_e : swFmBaseFlange (sheet metal base flange) swFmBeltAndChain (belt/chain) swFmBoundingBox (bounding box) swFmCirPattern (circular pattern) swFmCornerRelief (sheet metal corner relief) swFmCurvePattern (curve-driven pattern) swFmDerivedLPattern (derived-driven pattern) swFmDimPattern (variable/dimension pattern) swFmEdgeFlange (sheet metal edge flange) swFmFillet (constant radius, face, full round fillet/chamfer) swFmFillPattern (fill pattern) swFmFormToolInstance (library form tool) swFmGroundPlane (ground plane) swFmLibraryFeature (library) swFmLocalChainPattern (chain component pattern) swFmLocalCirPattern (circular component pattern) swFmLocalCurvePattern (curve-driven component pattern) swFmLocalLPattern (linear component pattern) swFmLocalSketchPattern (sketch-driven component pattern) swFmLPattern (linear pattern) swFmMateController (mate controller) swFmMirrorComponent (mirror components) swFmNormalCut (sheet metal normal cut) swFmRefCurve (projection curve) swFmRefSurface (surface sweep) swFmSketchBend (sheet metal sketched bend) swFmSketchPattern (sketch-driven pattern) swFmSMGusset (sheet metal gusset) swFmSolidToSheetMetal (convert solid to sheet metal) swFmSweep (boss sweep) swFmSweepCut (cut sweep) swFmSweepThread (sweep thread) swFmSweptFlange (sheet metal swept flange) swFmTabAndSlot (tab and slot) swFmTablePattern (table pattern)
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
  - IFeature.IGetDefinition
  - IFeatureManager.CreateFeature
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
  - definition
  - createdefinition
  - ifeaturemanager
  - manager
  - create
  - type
  - int32
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

# IFeatureManager.CreateDefinition

Creates a feature data object of the specified type.

## Signature

```csharp
System.Object CreateDefinition( 
   System.Int32
Type
)
```
## Parameters

- `Type` (System.Int32): Feature name ID as defined in swFeatureNameID_e : swFmBaseFlange (sheet metal base flange) swFmBeltAndChain (belt/chain) swFmBoundingBox (bounding box) swFmCirPattern (circular pattern) swFmCornerRelief (sheet metal corner relief) swFmCurvePattern (curve-driven pattern) swFmDerivedLPattern (derived-driven pattern) swFmDimPattern (variable/dimension pattern) swFmEdgeFlange (sheet metal edge flange) swFmFillet (constant radius, face, full round fillet/chamfer) swFmFillPattern (fill pattern) swFmFormToolInstance (library form tool) swFmGroundPlane (ground plane) swFmLibraryFeature (library) swFmLocalChainPattern (chain component pattern) swFmLocalCirPattern (circular component pattern) swFmLocalCurvePattern (curve-driven component pattern) swFmLocalLPattern (linear component pattern) swFmLocalSketchPattern (sketch-driven component pattern) swFmLPattern (linear pattern) swFmMateController (mate controller) swFmMirrorComponent (mirror components) swFmNormalCut (sheet metal normal cut) swFmRefCurve (projection curve) swFmRefSurface (surface sweep) swFmSketchBend (sheet metal sketched bend) swFmSketchPattern (sketch-driven pattern) swFmSMGusset (sheet metal gusset) swFmSolidToSheetMetal (convert solid to sheet metal) swFmSweep (boss sweep) swFmSweepCut (cut sweep) swFmSweepThread (sweep thread) swFmSweptFlange (sheet metal swept flange) swFmTabAndSlot (tab and slot) swFmTablePattern (table pattern)

## Return Value

thread , sweep , library , library form tool , tab and slot , bounding box , ground plane , mirror components , projection curve , sheet metal normal cut , sheet metal swept flange , sheet metal gusset , sheet metal edge flange , convert solid to sheet metal , simple fillet/chamfer , belt/chain , sheet metal base flange , sheet metal corner relief , sheet metal sketched bend , mate controller , or pattern-specific feature data object (see Remarks ); Nothing or null otherwise

## Remarks

This method initializes the feature data objects with default data for pattern, sweep, bounding box, ground plane, mirror components, projection curve, sheet metal normal cut, sheet metal swept flange, sheet metal gusset, sheet metal edge flange, tab/slot, library form tool, and belt/chain features.
For sheet metal base flange, sheet metal corner relief, convert solid to sheet metal, library, simple fillet, and thread features, you must initialize feature data objects using specific initialize methods.
For mate controller features, you can either pre-select mates before calling this method or initialize the feature data object returned by this method with default values.
See the
See Also
section.
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
- `IFeature.IGetDefinition`
- `IFeatureManager.CreateFeature`
- `ILibraryFeatureData.Initialize`
- `IMateControllerFeatureData.Initialize`
- `ISimpleFilletFeatureData2.Initialize`
- `IThreadFeatureData.InitializeThreadData`