declare module 'markdown-it' {
    interface MarkdownIt {
        render(src: string): string;
        use(...plugins: any[]): this;
    }

    interface MarkdownItOptions {

    }

    const markdownit: {
        (options?: MarkdownItOptions): MarkdownIt;
    };

    export = markdownit;
}