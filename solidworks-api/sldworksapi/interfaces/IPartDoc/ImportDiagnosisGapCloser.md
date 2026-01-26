---
type: method
interface: IPartDoc
member: ImportDiagnosisGapCloser
returns: void
parameters:
  -
    name: OldX
    type: System.Double
    description: x coordinate of vertex to move
  -
    name: OldY
    type: System.Double
    description: y coordinate of vertex to move
  -
    name: OldZ
    type: System.Double
    description: z coordinate of vertex to move
  -
    name: NewX
    type: System.Double
    description: x coordinate where to move the vertex
  -
    name: NewY
    type: System.Double
    description: y coordinate where to move the vertex
  -
    name: NewZ
    type: System.Double
    description: z coordinate where to move the vertex
  -
    name: LastMove
    type: System.Boolean
    description: True if this move is the last move in a series of moves to close the gap, false if not
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
  - IPartDoc.ImportDiagnosis
keywords:
  - importdiagnosisgapcloser
  - ipartdoc
  - part
  - doc
  - import
  - diagnosis
  - gap
  - closer
  - old
  - double
  - new
  - last
  - move
  - boolean
  - void
---

# IPartDoc.ImportDiagnosisGapCloser

Allows you to repair a gap by moving the vertices on the edges surrounding the gap to new positions to close the gap on the imported model.

## Signature

```csharp
void ImportDiagnosisGapCloser( 
   System.Double
OldX
,
   System.Double
OldY
,
   System.Double
OldZ
,
   System.Double
NewX
,
   System.Double
NewY
,
   System.Double
NewZ
,
   System.Boolean
LastMove
)
```
## Parameters

- `OldX` (System.Double): x coordinate of vertex to move
- `OldY` (System.Double): y coordinate of vertex to move
- `OldZ` (System.Double): z coordinate of vertex to move
- `NewX` (System.Double): x coordinate where to move the vertex
- `NewY` (System.Double): y coordinate where to move the vertex
- `NewZ` (System.Double): z coordinate where to move the vertex
- `LastMove` (System.Boolean): True if this move is the last move in a series of moves to close the gap, false if not

## Return Value

Unknown.

## See Also

- `IBody2.Diagnose`
- `IDiagnoseResult`
- `IPartDoc.ImportDiagnosis`