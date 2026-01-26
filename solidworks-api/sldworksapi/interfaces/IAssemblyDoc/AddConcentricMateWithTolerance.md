---
type: method
interface: IAssemblyDoc
member: AddConcentricMateWithTolerance
returns: Mate2
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
  - IAssemblyDoc.EditConcentricMate
  - IAssemblyDoc.EditMate4
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - mates
  - imate2
  - add
  - addconcentricmatewithtolerance
  - assembly
  - doc
  - concentric
  - mate
  - tolerance
  - align
  - int32
  - position
  - type
  - check
  - boolean
  - value
  - double
  - error
  - status
  - mate2
  - edit
  - misaligned
  - symmetric
  - vba
  - vb
  - net
---

# IAssemblyDoc.AddConcentricMateWithTolerance

Adds a misaligned concentric mate to this assembly.

## Signature

```csharp
Mate2 AddConcentricMateWithTolerance( 
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

Misaligned concentric mate

## Remarks

Select the two entities to mate before calling this method. A parent non-misaligned (i.e., standard) concentric mate must already exist between the selected entities. If a suitable parent concentric mate does not exist between the selected entities, then a standard concentric mate is created.
NOTE:
The typical way to add a standard concentric mate is to use
IAssemblyDoc::AddMate5
.

## Examples

- Add and Edit Misaligned Symmetric Concentric Mate (VBA) (Add_and_Edit_Misaligned_Symmetric_Concentric_Mate_Example_VB.htm)
- Add and Edit Misaligned Symmetric Concentric Mate (VB.NET) (Add_and_Edit_Misaligned_Symmetric_Concentric_Mate_Example_VBNET.htm)
- Add and Edit Misaligned Symmetric Concentric Mate (C#) (Add_and_Edit_Misaligned_Symmetric_Concentric_Mate_Example_CSharp.htm)

## See Also

- `IAssemblyDoc.EditConcentricMate`
- `IAssemblyDoc.EditMate4`