---
type: method
interface: IEnvironment
member: GetSymText
returns: System.Object
parameters:
  -
    name: SymId
    type: System.String
    description: Name of the geometric tolerance symbol formatted as: < LibraryName-SymbolName > where LibraryName and SymbolName are in the SOLIDWORKS text file C:\ProgramData\SolidWorks\SolidWorks 20 nn \ lang \ english\gtol.sym . NOTE : You must include the right- and left-angle brackets and separate LibraryName and SymbolName with a hyphen; for example, <MOD-DEG>.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - symbols
  - geometric
  - tolerancing
  - getsymtext
  - ienvironment
  - environment
  - sym
  - text
  - id
  - string
  - object
---

# IEnvironment.GetSymText

Gets an array containing the text associated with the specified geometric tolerance symbol.

## Signature

```csharp
System.Object GetSymText( 
   System.String
SymId
)
```
## Parameters

- `SymId` (System.String): Name of the geometric tolerance symbol formatted as: < LibraryName-SymbolName > where LibraryName and SymbolName are in the SOLIDWORKS text file C:\ProgramData\SolidWorks\SolidWorks 20 nn \ lang \ english\gtol.sym . NOTE : You must include the right- and left-angle brackets and separate LibraryName and SymbolName with a hyphen; for example, <MOD-DEG>.

## Return Value

Array (see Remarks )

## Remarks

You can use
IEnvironment::GetSymEdgeCounts
to determine how many text strings are in the specified geometric tolerance symbol. For example, passing <MOD-MMC> in SymID returns one text string ("M") and one circle.
The format of the return data is an array of strings. The size of the array returned is based on the number of text pieces in this symbol.