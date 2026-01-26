---
type: method
interface: IModelDoc2
member: PrintOut
returns: void
parameters:
  -
    name: FromPage
    type: System.Int32
    description: 
  -
    name: ToPage
    type: System.Int32
    description: 
  -
    name: NumCopies
    type: System.Int32
    description: 
  -
    name: Collate
    type: System.Boolean
    description: 
  -
    name: Printer
    type: System.String
    description: 
  -
    name: Scale
    type: System.Double
    description: 
  -
    name: PrintToFile
    type: System.Boolean
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - printout
  - imodeldoc2
  - model
  - doc2
  - print
  - out
  - page
  - int32
  - num
  - copies
  - collate
  - boolean
  - printer
  - string
  - scale
  - double
  - file
  - void
---

# IModelDoc2.PrintOut

Obsolete. Superseded by IModelDocExtension::PrintOut2 and IModelDocExtension::IPrintOut2.

## Signature

```csharp
void PrintOut( 
   System.Int32
FromPage
,
   System.Int32
ToPage
,
   System.Int32
NumCopies
,
   System.Boolean
Collate
,
   System.String
Printer
,
   System.Double
Scale
,
   System.Boolean
PrintToFile
)
```
## Parameters

- `FromPage` (System.Int32): 
- `ToPage` (System.Int32): 
- `NumCopies` (System.Int32): 
- `Collate` (System.Boolean): 
- `Printer` (System.String): 
- `Scale` (System.Double): 
- `PrintToFile` (System.Boolean): 

## Return Value

Unknown.