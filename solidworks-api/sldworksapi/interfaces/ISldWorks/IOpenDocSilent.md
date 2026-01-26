---
type: method
interface: ISldWorks
member: IOpenDocSilent
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
  - iopendocsilent
  - isldworks
  - sld
  - works
  - open
  - doc
  - silent
  - file
  - name
  - string
  - type
  - int32
  - errors
  - model
---

# ISldWorks.IOpenDocSilent

Obsolete. Superseded by ISldWorks::OpenDoc6.

## Signature

```csharp
ModelDoc IOpenDocSilent( 
   System.String
FileName
,
   System.Int32
Type
,
   out System.Int32
Errors
)
```
## Parameters

- `FileName` (System.String): 
- `Type` (System.Int32): 
- `Errors` (System.Int32): 

## Return Value

Unknown.