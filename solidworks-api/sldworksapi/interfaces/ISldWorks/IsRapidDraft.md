---
type: method
interface: ISldWorks
member: IsRapidDraft
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Name of the drawing file
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - detached
  - drawing
  - drawings
  - see
  - also
  - idrawingdoc
  - israpiddraft
  - isldworks
  - sld
  - works
  - rapid
  - draft
  - file
  - name
  - string
  - boolean
---

# ISldWorks.IsRapidDraft

Gets whether the specified drawing file is in SOLIDWORKS Detached format.

## Signature

```csharp
System.Boolean IsRapidDraft( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Name of the drawing file

## Return Value

True if the file is in RapidDraft format, false if not