---
type: method
interface: IEnvironment
member: GetIsBound
returns: void
parameters:
  -
    name: SymId
    type: System.String
    description: Name of the geometric tolerance symbol formatted as: < LibraryName-SymbolName > where LibraryName and SymbolName are in the SOLIDWORKS text file C:\ProgramData\SolidWorks\SolidWorks 20 nn \ lang \ english\gtol.sym . NOTE : You must include the right- and left-angle brackets and separate LibraryName and SymbolName with a hyphen; for example, <MOD-DEG>.
  -
    name: Retval
    type: System.Boolean
    description: True if the geometric tolerance symbol is bound, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - getisbound
  - ienvironment
  - environment
  - bound
  - sym
  - id
  - string
  - retval
  - boolean
  - void
---

# IEnvironment.GetIsBound

Gets whether the specified geometric tolerance symbol is bound.

## Signature

```csharp
void GetIsBound( 
   System.String
SymId
,
   out System.Boolean
Retval
)
```
## Parameters

- `SymId` (System.String): Name of the geometric tolerance symbol formatted as: < LibraryName-SymbolName > where LibraryName and SymbolName are in the SOLIDWORKS text file C:\ProgramData\SolidWorks\SolidWorks 20 nn \ lang \ english\gtol.sym . NOTE : You must include the right- and left-angle brackets and separate LibraryName and SymbolName with a hyphen; for example, <MOD-DEG>.
- `Retval` (System.Boolean): True if the geometric tolerance symbol is bound, false if not

## Return Value

Unknown.

## Remarks

Bound controls the horizontal spacing of a geometric tolerance symbol within a row of text in notes and dimensions.

## Examples

- IEnvironment (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEnvironment)