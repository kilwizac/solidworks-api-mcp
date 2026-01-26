---
type: method
interface: IAssemblyDoc
member: EditConcentricMate
returns: void
parameters:
  -
    name: AlignFromEnum
    type: System.Int32
    description: Type of mate alignment as defined in swMateAlign_e
  -
    name: ConcentricPositionType
    type: System.Int32
    description: Misaligned concentric mate position as defined in swConcentricAlignmentType_e
  -
    name: ConcentricToleranceCheck
    type: System.Boolean
    description: True to override the deviation, false to have SOLIDWORKS calculate the deviation
  -
    name: ConcentricToleranceValue
    type: System.Double
    description: Maximum deviation; valid only when ConcentricToleranceCheck is true
  -
    name: ErrorStatus
    type: System.Int32
    description: Success or error as defined by swAddMateError_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.AddConcentricMateWithTolerance
  - IAssemblyDoc.AddMate5
keywords:
  - edit
  - mates
  - assemblies
  - see
  - also
  - iassemblydoc
  - imate2
  - editconcentricmate
  - assembly
  - doc
  - concentric
  - mate
  - align
  - int32
  - position
  - type
  - tolerance
  - check
  - boolean
  - value
  - double
  - error
  - status
  - void
  - addconcentricmatewithtolerance
---

# IAssemblyDoc.EditConcentricMate

Edits a misaligned concentric mate.

## Signature

```csharp
void EditConcentricMate( 
   System.Int32
AlignFromEnum
,
   System.Int32
ConcentricPositionType
,
   System.Boolean
ConcentricToleranceCheck
,
   System.Double
ConcentricToleranceValue
,
   out System.Int32
ErrorStatus
)
```
## Parameters

- `AlignFromEnum` (System.Int32): Type of mate alignment as defined in swMateAlign_e
- `ConcentricPositionType` (System.Int32): Misaligned concentric mate position as defined in swConcentricAlignmentType_e
- `ConcentricToleranceCheck` (System.Boolean): True to override the deviation, false to have SOLIDWORKS calculate the deviation
- `ConcentricToleranceValue` (System.Double): Maximum deviation; valid only when ConcentricToleranceCheck is true
- `ErrorStatus` (System.Int32): Success or error as defined by swAddMateError_e

## Return Value

Unknown.

## Remarks

Select these entities before calling this method:
Two entities that define the misaligned concentric mate
Misaligned concentric mate
A parent non-misaligned (i.e., standard) concentric mate must already exist for the selected misaligned concentric mate. If a suitable parent concentric mate does not exist, then the selected misaligned concentric mate changes to a standard concentric mate. You can also change a misaligned concentric mate to a standard concentric mate using
IAssemblyDoc::EditMate4
.
After calling IAssemblyDoc::EditConcentricMate, call
IModelDoc2::EditRebuild3
.

## Examples

- IAssemblyDoc::AddConcentricMateWithTolerance (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAssemblyDoc~AddConcentricMateWithTolerance)

## See Also

- `IAssemblyDoc.AddConcentricMateWithTolerance`
- `IAssemblyDoc.AddMate5`