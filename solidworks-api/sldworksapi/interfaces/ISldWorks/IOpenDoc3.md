---
type: method
interface: ISldWorks
member: IOpenDoc3
returns: ModelDoc
parameters:
  -
    name: FileName
    type: System.String
    description: 
  -
    name: Type
    type: System.Int32
    description: 
  -
    name: ReadOnly
    type: System.Boolean
    description: 
  -
    name: ViewOnly
    type: System.Boolean
    description: 
  -
    name: RapidDraft
    type: System.Boolean
    description: 
  -
    name: Silent
    type: System.Boolean
    description: 
  -
    name: Errors
    type: System.Int32
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related: []
keywords:
  - iopendoc3
  - isldworks
  - sld
  - works
  - open
  - doc3
  - file
  - name
  - string
  - type
  - int32
  - read
  - only
  - boolean
  - view
  - rapid
  - draft
  - silent
  - errors
  - model
  - doc
---

# ISldWorks.IOpenDoc3

Obsolete. Superseded by ISldWorks::OpenDoc6.

## Signature

```csharp
ModelDoc IOpenDoc3( 
   System.String
FileName
,
   System.Int32
Type
,
   System.Boolean
ReadOnly
,
   System.Boolean
ViewOnly
,
   System.Boolean
RapidDraft
,
   System.Boolean
Silent
,
   out System.Int32
Errors
)
```
## Parameters

- `FileName` (System.String): 
- `Type` (System.Int32): 
- `ReadOnly` (System.Boolean): 
- `ViewOnly` (System.Boolean): 
- `RapidDraft` (System.Boolean): 
- `Silent` (System.Boolean): 
- `Errors` (System.Int32): 

## Return Value

Unknown.