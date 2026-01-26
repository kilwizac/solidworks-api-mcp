---
type: method
interface: IPartDoc
member: ImportDiagnosis
returns: System.Int32
parameters:
  -
    name: CloseAllGaps
    type: System.Boolean
    description: True to repair any gaps, false to not
  -
    name: RemoveFaces
    type: System.Boolean
    description: True to remove any bad faces and create gaps in the feature, false to not
  -
    name: FixFaces
    type: System.Boolean
    description: True to fix the bad faces, false to not
  -
    name: Options
    type: System.Int32
    description: Not used
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - file-io
  - parts
  - ui
related:
  - IBody2.Diagnose
  - IDiagnoseResult
  - IPartDoc.ImportDiagnosisGapCloser
keywords:
  - diagnostic
  - tools
  - import
  - diagnostics
  - importdiagnosis
  - ipartdoc
  - part
  - doc
  - diagnosis
  - close
  - all
  - gaps
  - boolean
  - remove
  - faces
  - fix
  - options
  - int32
  - step
  - file
  - vb
  - net
  - vba
---

# IPartDoc.ImportDiagnosis

Diagnoses and repairs any gaps or bad faces on imported features.

## Signature

```csharp
System.Int32 ImportDiagnosis( 
   System.Boolean
CloseAllGaps
,
   System.Boolean
RemoveFaces
,
   System.Boolean
FixFaces
,
   System.Int32
Options
)
```
## Parameters

- `CloseAllGaps` (System.Boolean): True to repair any gaps, false to not
- `RemoveFaces` (System.Boolean): True to remove any bad faces and create gaps in the feature, false to not
- `FixFaces` (System.Boolean): True to fix the bad faces, false to not
- `Options` (System.Int32): Not used

## Return Value

>= 0 if import diagnosis is successful, -1 if an error occurred

## Remarks

Use this method for an imported solid body that has rebuild errors or for an imported surface that did not knit into a solid body.

## Examples

- Import STEP File (C#) (Import_STEP_File_Example_CSharp.htm)
- Import STEP File (VB.NET) (Import_STEP_File_Example_VBNET.htm)
- Import STEP File (VBA) (Import_STEP_File_Example_VB.htm)

## See Also

- `IBody2.Diagnose`
- `IDiagnoseResult`
- `IPartDoc.ImportDiagnosisGapCloser`