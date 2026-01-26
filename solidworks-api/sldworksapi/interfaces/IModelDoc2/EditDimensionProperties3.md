---
type: method
interface: IModelDoc2
member: EditDimensionProperties3
returns: System.Boolean
parameters:
  -
    name: TolType
    type: System.Int32
    description: Type of tolerance as defined in swTolType_e
  -
    name: TolMax
    type: System.Double
    description: Maximum value for the tolerance
  -
    name: TolMin
    type: System.Double
    description: Minimum value for the tolerance
  -
    name: TolMaxFit
    type: System.String
    description: Text for the maximum FIT value when using a fit tolerance type
  -
    name: TolMinFit
    type: System.String
    description: Text for the minimum FIT value when using a fit tolerance type
  -
    name: UseDocPrec
    type: System.Boolean
    description: True to use the document's precision value, false to use value specified for precision
  -
    name: Precision
    type: System.Int32
    description: Precision value to use for this dimension if UseDocPrec is false
  -
    name: ArrowsIn
    type: System.Int32
    description: Value for the arrow direction as defined in swDimensionArrowsSide_e
  -
    name: UseDocArrows
    type: System.Boolean
    description: True to use the document's arrow types, false to use values specified for Arrow1 and Arrow2
  -
    name: Arrow1
    type: System.Int32
    description: Type of arrow to use on the first arrow of this dimension as defined in swArrowStyle_e if UseDocArrows is false
  -
    name: Arrow2
    type: System.Int32
    description: Type of arrow to use on the second arrow of this dimension as defined in swArrowStyle_e if UseDocArrows is false
  -
    name: PrefixText
    type: System.String
    description: Text for the prefix of the dimension
  -
    name: SuffixText
    type: System.String
    description: Text for the suffix of the dimension
  -
    name: ShowValue
    type: System.Boolean
    description: True to display the value of the dimension in the user interface, false to not
  -
    name: CalloutText1
    type: System.String
    description: Callout text to display above the dimension
  -
    name: CalloutText2
    type: System.String
    description: Callout text to display below the dimension
  -
    name: CenterText
    type: System.Boolean
    description: True if you want to center the text in the dimension, false if not
  -
    name: ConfigOption
    type: System.Int32
    description: Configuration options as defined swInConfigurationOpts_e
  -
    name: ConfigNames
    type: System.Object
    description: Names of configurations to which to apply these edits (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - dimensions
  - documents
  - ui
related:
  - IModelDoc2.IEditDimensionProperties3
keywords:
  - editdimensionproperties3
  - imodeldoc2
  - model
  - doc2
  - edit
  - dimension
  - properties3
  - tol
  - type
  - int32
  - max
  - double
  - min
  - fit
  - string
  - use
  - doc
  - prec
  - boolean
  - precision
  - arrows
  - arrow1
  - arrow2
  - prefix
  - text
  - suffix
  - show
  - value
  - callout
  - text1
  - text2
  - center
  - config
  - option
  - names
  - object
---

# IModelDoc2.EditDimensionProperties3

Obsolete. Superseded by IModelDocExtension::EditDimensionProperties.

## Signature

```csharp
System.Boolean EditDimensionProperties3( 
   System.Int32
TolType
,
   System.Double
TolMax
,
   System.Double
TolMin
,
   System.String
TolMaxFit
,
   System.String
TolMinFit
,
   System.Boolean
UseDocPrec
,
   System.Int32
Precision
,
   System.Int32
ArrowsIn
,
   System.Boolean
UseDocArrows
,
   System.Int32
Arrow1
,
   System.Int32
Arrow2
,
   System.String
PrefixText
,
   System.String
SuffixText
,
   System.Boolean
ShowValue
,
   System.String
CalloutText1
,
   System.String
CalloutText2
,
   System.Boolean
CenterText
,
   System.Int32
ConfigOption
,
   System.Object
ConfigNames
)
```
## Parameters

- `TolType` (System.Int32): Type of tolerance as defined in swTolType_e
- `TolMax` (System.Double): Maximum value for the tolerance
- `TolMin` (System.Double): Minimum value for the tolerance
- `TolMaxFit` (System.String): Text for the maximum FIT value when using a fit tolerance type
- `TolMinFit` (System.String): Text for the minimum FIT value when using a fit tolerance type
- `UseDocPrec` (System.Boolean): True to use the document's precision value, false to use value specified for precision
- `Precision` (System.Int32): Precision value to use for this dimension if UseDocPrec is false
- `ArrowsIn` (System.Int32): Value for the arrow direction as defined in swDimensionArrowsSide_e
- `UseDocArrows` (System.Boolean): True to use the document's arrow types, false to use values specified for Arrow1 and Arrow2
- `Arrow1` (System.Int32): Type of arrow to use on the first arrow of this dimension as defined in swArrowStyle_e if UseDocArrows is false
- `Arrow2` (System.Int32): Type of arrow to use on the second arrow of this dimension as defined in swArrowStyle_e if UseDocArrows is false
- `PrefixText` (System.String): Text for the prefix of the dimension
- `SuffixText` (System.String): Text for the suffix of the dimension
- `ShowValue` (System.Boolean): True to display the value of the dimension in the user interface, false to not
- `CalloutText1` (System.String): Callout text to display above the dimension
- `CalloutText2` (System.String): Callout text to display below the dimension
- `CenterText` (System.Boolean): True if you want to center the text in the dimension, false if not
- `ConfigOption` (System.Int32): Configuration options as defined swInConfigurationOpts_e
- `ConfigNames` (System.Object): Names of configurations to which to apply these edits (see Remarks )

## Return Value

True if the dimension is modified, false if not

## Remarks

This method always changes the dimension's parameters in the active configuration. For example, if you specify swSpecifyConfiguration for ConfigOption and do not specify the name of the active configuration in ConfigNames, then the dimension's parameters in the active configuration are still affected.

## See Also

- `IModelDoc2.IEditDimensionProperties3`