---
type: method
interface: IDisplayDimension
member: GetTextFormatItems
returns: System.Int32
parameters:
  -
    name: WhichText
    type: System.Int32
    description: Portion of the display dimension text as defined in swDimensionTextParts_e
  -
    name: TokensDefinition
    type: System.Object
    description: Array of strings containing format symbols for the text portion specified in WhichText
  -
    name: TokensEvaluated
    type: System.Object
    description: Array of strings containing evaluations of symbols in TokensDefinition
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetText
keywords:
  - gettextformatitems
  - idisplaydimension
  - display
  - dimension
  - text
  - format
  - items
  - which
  - int32
  - tokens
  - definition
  - object
  - evaluated
  - chamfer
  - vb
  - net
  - vba
---

# IDisplayDimension.GetTextFormatItems

Gets the format tokens of the specified text portion of a multi-value display dimension.

## Signature

```csharp
System.Int32 GetTextFormatItems( 
   System.Int32
WhichText
,
   out System.Object
TokensDefinition
,
   out System.Object
TokensEvaluated
)
```
## Parameters

- `WhichText` (System.Int32): Portion of the display dimension text as defined in swDimensionTextParts_e
- `TokensDefinition` (System.Object): Array of strings containing format symbols for the text portion specified in WhichText
- `TokensEvaluated` (System.Object): Array of strings containing evaluations of symbols in TokensDefinition

## Return Value

Size of returned arrays

## Remarks

Each display dimension's PropertyManager page contains a section called Dimension Text that specifies the format of the displayed dimension. The format consists of function symbols or tokens enclosed within angle brackets (e.g., <DIM>), each of which connotes the function or definition of the value symbols that follow it.
This method retrieves all of the symbols, both function and value, for the portion of the display dimension text specified by WhichText. It also retrieves values for any symbols that can be evaluated in TokensDefinition.
NOTE:
This method does not support
hole callouts
.

## Examples

- Get Chamfer Display Dimension (C#) (Get_Chamfer_Display_Dimension_Example_CSharp.htm)
- Get Chamfer Display Dimension (VB.NET) (Get_Chamfer_Display_Dimension_Example_VBNET.htm)
- Get Chamfer Display Dimension (VBA) (Get_Chamfer_Display_Dimension_Example_VB.htm)

## See Also

- `IDisplayDimension.GetText`