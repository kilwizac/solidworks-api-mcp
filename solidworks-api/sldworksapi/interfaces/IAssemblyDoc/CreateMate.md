---
type: method
interface: IAssemblyDoc
member: CreateMate
returns: System.Object
parameters:
  -
    name: MateData
    type: System.Object
    description: Mate-specific object (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.AutoMateRepair
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - mates
  - createmate
  - assembly
  - doc
  - create
  - mate
  - data
  - object
---

# IAssemblyDoc.CreateMate

Creates a mate with the specified feature data object.

## Signature

```csharp
System.Object CreateMate( 
   System.Object
MateData
)
```
## Parameters

- `MateData` (System.Object): Mate-specific object (see Remarks )

## Return Value

IFeature

## Remarks

IMateFeatureData
is the base interface for the following mate-specific interfaces (an asterisk indicates that pre-selection of mate entities during mate creation is supported):
IAngleMateFeatureData
ICamFollowerMateFeatureData
*
ICoincidentMateFeatureData
*
IConcentricMateFeatureData
*
IDistanceMateFeatureData
IGearMateFeatureData
*
IHingeMateFeatureData
*
ILinearCouplerMateFeatureData
ILockMateFeatureData
*
IParallelMateFeatureData
*
IPerpendicularMateFeatureData
*
IProfileCenterMateFeatureData
IRackPinionMateFeatureData
*
IScrewMateFeatureData
*
ISlotMateFeatureData
*
ISymmetricMateFeatureData
ITangentMateFeatureData
*
IUniversalJointMateFeatureData
*
IWidthMateFeatureData
To create a standard, advanced, or mechanical mate:
Use
IAssemblyDoc::CreateMateData
to access a MateFeatureData object.
Set the general properties of the MateFeatureData object.
Cast the MateFeatureData object to one of the mate-specific objects.
Follow specific instructions in the Remarks of the mate-specific interface, set specific properties of the mate-specific object, and/or pre-select entities to mate for asterisked interfaces above.
Call this method, passing in the mate-specific object.
To create:
Misaligned concentric mates, use
IAssemblyDoc::AddConcentricMateWithTolerance
.
Cylindrical distance mates, use
IAssemblyDoc::AddDistanceMate
.

## See Also

- `IAssemblyDoc.AutoMateRepair`