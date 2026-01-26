---
type: property
interface: IPrintSpecification
member: PrintFile
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related: []
keywords:
  - print
  - specification
  - printfile
  - iprintspecification
  - file
  - string
readonly: null
---

# IPrintSpecification.PrintFile

Gets or sets the path and file name to which to print the document.

## Signature

```csharp
System.String PrintFile {get; set;}
```
## Parameters

None.

## Return Value

File name; default file name is output.prn

## Remarks

This property is valid only if
IPrintSpecification::PrintToFile
is set to true.