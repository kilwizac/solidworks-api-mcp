---
type: method
interface: IModelDoc2
member: MoldDraftAnalysis
returns: void
parameters:
  -
    name: Angle
    type: System.Double
    description: Reference draft angle
  -
    name: Options
    type: System.Int32
    description: Analysis options as defined in swDraftAnalysisOptions_e
  -
    name: Colors
    type: System.Object
    description: Array of 4 colors (positive draft, negative draft, no draft, straddled faces)
  -
    name: Shows
    type: System.Int32
    description: Show each draft type as defined in swDraftAnalysisShow_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - mold
  - tools
  - draft
  - analysis
  - drafts
  - see
  - also
  - idraftfeaturedata2
  - molddraftanalysis
  - imodeldoc2
  - model
  - doc2
  - angle
  - double
  - options
  - int32
  - colors
  - object
  - shows
  - void
---

# IModelDoc2.MoldDraftAnalysis

Performs a mold draft analysis.

## Signature

```csharp
void MoldDraftAnalysis( 
   System.Double
Angle
,
   System.Int32
Options
,
   System.Object
Colors
,
   System.Int32
Shows
)
```
## Parameters

- `Angle` (System.Double): Reference draft angle
- `Options` (System.Int32): Analysis options as defined in swDraftAnalysisOptions_e
- `Colors` (System.Object): Array of 4 colors (positive draft, negative draft, no draft, straddled faces)
- `Shows` (System.Int32): Show each draft type as defined in swDraftAnalysisShow_e

## Return Value

Unknown.